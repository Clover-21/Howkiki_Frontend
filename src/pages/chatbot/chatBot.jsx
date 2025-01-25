import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { sender: "user", text: input },
        { sender: "bot", text: "반가워요 ~" },
      ]);
      setInput("");
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
      </ChatBox>
      <ChatInput>
        <HsIcon src={orderhs} onClick={() => navigate("/ordersummary")} />
        <InputField
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력해주세요"
        />
        <BtnWrap>
          <SendButton onClick={handleSendMessage} />
          <SendIcon src={send} onClick={handleSendMessage} />
        </BtnWrap>
      </ChatInput>
    </ChatContainer>
  );
}
