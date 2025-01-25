import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 390px;
  height: 844px;
  background-color: #f2f2f5;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ChatTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  color: #8d8d8d;
  margin-top: 30px;
`;

export const ChatBox = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  max-width: 300px;
  padding: 15px;
  margin: 5px;
  border-radius: 20px;
  font-size: 13px;
  color: ${({ sender }) => (sender === "bot" ? "#000000" : "#ffffff")};
  background-color: ${({ sender }) =>
    sender === "bot" ? "#ffffff" : "#5D60EF"};
  align-self: ${({ sender }) => (sender === "bot" ? "flex-start" : "flex-end")};
`;

export const ChatInput = styled.div`
  height: 80px;
  display: flex;
  padding: 20px;
  margin-bottom: 30px;
  background-color: #f2f2f5;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 15px;
  border-radius: 30px;
  border: none;
  outline: none;
  font-size: 11px;

  &::placeholder {
    color: #848484;
    font-weight: 600;
  }
`;

export const BtnWrap = styled.div`
  position: relative;
`;

export const SendButton = styled.button`
  width: 31px;
  height: 31px;
  background-color: #5d60ef;
  border: none;
  border-radius: 50%;
  margin-left: -40px;
  margin-top: 5px;
`;

export const SendIcon = styled.img`
  width: 25px;
  position: absolute;
  top: 6px;
  transform: translateX(-103%);
`;

export const HsIcon = styled.img`
  width: 38px;
  margin-right: 13px;
`;
