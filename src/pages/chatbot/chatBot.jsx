import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RequestFinishModal from "../../components/chatbot/RequestFinishModal";
import OrderCancelModal from "../../components/chatbot/OrderCancelModal";
import SuccessModal from "../../components/chatbot/SuccessModal";
import PaymentBtn from "../../components/chatbot/PaymenBtn";
import PaymentModal from "../../components/chatbot/PaymentModal";
import send from "../../assets/icon/send.svg";
import orderhs from "../../assets/icon/orderhistory.svg";
import botIcon from "../../assets/icon/boticon.svg";
import { apiClient } from "../../api/chatApiClient";
import {
  Container,
  ChatContainer,
  ModalWrapper,
  ChatTitle,
  ChatBox,
  Message,
  MessageWrapper,
  BotIcon,
  ChatInput,
  InputContainer,
  InputField,
  SendButton,
  SendIcon,
  HsIcon,
} from "../../styles/chatbot/chatBot.module";

export default function ChatBot() {
  const navigate = useNavigate();
  const { storeId, tableNumber } = useParams();
  const [orderInfo, setOrderInfo] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const chatBoxRef = useRef(null);
  const token = sessionStorage.getItem(`chatbot_token_${tableNumber}`);

  //sessionStorage에서 이전 대화 불러오기
  const loadMessages = () => {
    const savedMessages = sessionStorage.getItem(
      `chat_messages_${tableNumber}`
    );
    return savedMessages
      ? JSON.parse(savedMessages)
      : [{ sender: "bot", text: "호우섬에 오신 것을 환영합니다!" }];
  };

  //메시지 상태
  const [messages, setMessages] = useState(loadMessages);
  const [input, setInput] = useState("");
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  //메시지가 변경될 때마다 저장
  useEffect(() => {
    sessionStorage.setItem(
      `chat_messages_${tableNumber}`,
      JSON.stringify(messages)
    );
  }, [messages, tableNumber]);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const inputElement = document.getElementById("inputfield");
    if (inputElement) {
      inputElement.style.height = "40px"; // 초기화
      inputElement.style.height = `${Math.min(
        inputElement.scrollHeight,
        78
      )}px`; // scrollHeight 기반으로 설정
    }
  }, []);

  useEffect(() => {
    if (messages.length === 1) {
      const timer = setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "bot",
            text: "주문 또는 궁금한 점을 입력하세요. 대화를 종료하려면 '종료' 또는 '그만'을 입력하세요.",
          },
        ]);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!window.IMP) {
      const script = document.createElement("script");
      script.src = "https://cdn.portone.io/v1/js-sdk.js";
      script.onload = () => {
        window.IMP.init(process.env.REACT_APP_PORTONE_MERCHANT_CODE);
      };
      document.head.appendChild(script);
    } else {
      window.IMP.init(process.env.REACT_APP_PORTONE_MERCHANT_CODE);
    }
  }, []);

  const chatBotMsg = async (question) => {
    setLoading(true);
    try {
      const response = await apiClient.post(`/api/chat`, {
        question,
        storeId,
        tableNum: tableNumber,
        token,
      });
      console.log(response.data);

      const data = response.data.function_call_result?.data;
      const successMessage = response.data.function_call_result?.message;

      let menuImgUrl = null;
      if (data?.menuImgUrl) {
        menuImgUrl = data.menuImgUrl;
      }

      if (successMessage === "주문 생성 성공") {
        const merchantUid = `order_${data.orderId}_${Date.now()}`;

        setOrderInfo({
          productName: data?.orderDetail[0]?.menuName,
          amount: data?.orderPrice,
          merchantUid,
        });
        setIsPaymentModalOpen(true);
      }

      return {
        message: response.data.response,
        imageUrl: menuImgUrl,
      };
    } catch (error) {
      console.error("챗봇 API 호출 오류:", error);
      return {
        message: "죄송합니다, 답변을 가져올 수 없습니다.",
        imageUrl: null,
      };
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = input.trim();
      setInput("");

      const inputElement = document.getElementById("inputfield");
      if (inputElement) {
        inputElement.style.height = "40px";
      }

      setMessages((prevMessages) => {
        const newMessages = [
          ...prevMessages,
          { sender: "user", text: userMessage },
        ];
        sessionStorage.setItem(
          `chat_messages_${tableNumber}`,
          JSON.stringify(newMessages)
        );
        return newMessages;
      });

      const botReply = await chatBotMsg(userMessage);

      setMessages((prevMessages) => {
        const newMessages = [
          ...prevMessages,
          {
            sender: "bot",
            text: botReply.message,
            imageUrl: botReply.imageUrl,
          },
        ];
        sessionStorage.setItem(
          `chat_messages_${tableNumber}`,
          JSON.stringify(newMessages)
        );
        return newMessages;
      });
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = "40px";
    el.style.height = `${Math.min(el.scrollHeight, 78)}px`;
  };

  return (
    <Container>
      <ChatContainer>
        <ModalWrapper>
          {isRequestModalOpen && (
            <RequestFinishModal
              isOpen={isRequestModalOpen}
              onClose={() => setIsRequestModalOpen(false)}
            />
          )}
          {isCancelModalOpen && (
            <OrderCancelModal
              isOpen={isCancelModalOpen}
              onClose={() => setIsCancelModalOpen(false)}
            />
          )}
        </ModalWrapper>
        <ChatTitle>키키 chat</ChatTitle>
        <ChatBox ref={chatBoxRef}>
          {messages.map((msg, index) => {
            const prevSender = messages[index - 1]?.sender;
            const isSameSender = msg.sender === prevSender;

            const isFirstBotMessage =
              index === 0 || messages[index - 1]?.sender !== "bot";

            return (
              <MessageWrapper
                key={index}
                sender={msg.sender}
                style={{
                  marginTop: isSameSender ? "10px" : "20px",
                }}
              >
                {isFirstBotMessage && msg.sender === "bot" && (
                  <BotIcon src={botIcon} alt="Bot Icon" />
                )}
                <Message sender={msg.sender}>
                  <p>{msg.text}</p>
                  {msg.imageUrl && (
                    <img
                      src={msg.imageUrl}
                      alt="menuImg"
                      style={{
                        width: "130px",
                        height: "130px",
                      }}
                    />
                  )}
                </Message>
              </MessageWrapper>
            );
          })}
          {loading &&
            (() => {
              const lastSender = messages[messages.length - 1]?.sender;
              const isSameSender = lastSender === "bot";

              return (
                <MessageWrapper
                  sender="bot"
                  style={{
                    marginTop: isSameSender ? "10px" : "20px",
                  }}
                >
                  <BotIcon src={botIcon} alt="Bot Icon" />
                  <Message sender="bot">
                    <p>. . .</p>
                  </Message>
                </MessageWrapper>
              );
            })()}
        </ChatBox>
        <ChatInput>
          <HsIcon
            src={orderhs}
            onClick={() => navigate(`/ordersummary/${storeId}/${tableNumber}`)}
          />
          <InputContainer>
            <InputField
              id="inputfield"
              value={input}
              onChange={handleChange}
              placeholder="메시지를 입력해주세요"
            />
            <SendButton onClick={handleSendMessage}>
              <SendIcon src={send} alt="send" />
            </SendButton>
          </InputContainer>
        </ChatInput>
      </ChatContainer>
      {isPaymentModalOpen && (
        <PaymentModal isOpen={isPaymentModalOpen}>
          {orderInfo && (
            <PaymentBtn
              productName={orderInfo.productName}
              amount={orderInfo.amount}
              merchantUid={orderInfo.merchantUid}
              onSuccess={() => {
                setIsPaymentModalOpen(false);
                setOpenSuccessModal(true);
              }}
            />
          )}
        </PaymentModal>
      )}
      {openSuccessModal && (
        <SuccessModal
          isOpen={openSuccessModal}
          onClose={() => setOpenSuccessModal(false)}
        />
      )}
    </Container>
  );
}
