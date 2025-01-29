import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ChatContainer,
  ChatTitle,
  ChatBox,
  Message,
  ChatInput,
  InputField,
  BtnWrap,
  SendButton,
  SendIcon,
  HsIcon,
} from "../../styles/chatbot/chatBot.module";
import send from "../../assets/icon/send.svg";
import orderhs from "../../assets/icon/orderhistory.svg";

export default function ChatBot() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    { sender: "bot", text: "호우섬에 오신 것을 환영합니다!" },
  ]);

  useEffect(() => {
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
  }, []);

  const chatBotMsg = async (userMessage) => {
    setLoading(true);
    try {
      const response = await axios.post("https:~", {
        // 여기에 실제 api 주소 작성 예정
        message: userMessage,
      });

      return response.data.reply; // 임의로 작성
    } catch (error) {
      console.error("챗봇 API 호출 오류:", error);
      return "죄송합니다, 답변을 가져올 수 없습니다.";
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = input.trim();

      // 사용자 메시지
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: userMessage },
      ]);

      setInput("");

      // API 호출 후 챗봇 답변
      const botReply = await chatBotMsg(userMessage);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: botReply },
      ]);
    }
  };

  return (
    <ChatContainer>
      <ChatTitle>키키 chat</ChatTitle>
      <ChatBox>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender}>
            <p>{msg.text}</p>
          </Message>
        ))}
        {loading && (
          <Message sender="bot">
            <p>응답 중...</p>
          </Message>
        )}
      </ChatBox>
      <ChatInput>
        <HsIcon src={orderhs} onClick={() => navigate("/ordersummary")} />
        <InputField
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력해주세요"
          disabled={loading}
        />
        <BtnWrap>
          <SendButton onClick={handleSendMessage} />
          <SendIcon src={send} onClick={handleSendMessage} />
        </BtnWrap>
      </ChatInput>
    </ChatContainer>
  );
}
