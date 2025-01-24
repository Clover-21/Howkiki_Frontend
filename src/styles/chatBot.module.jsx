import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 414px;
  height: 896px;
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
  color: ${({ sender }) => (sender === "bot" ? "#000000" : "#ffffff")};
  background-color: ${({ sender }) =>
    sender === "bot" ? "#ffffff" : "#5D60EF"};
  align-self: ${({ sender }) => (sender === "bot" ? "flex-start" : "flex-end")};
`;

export const ChatInput = styled.div`
  height: 95px;
  display: flex;
  padding: 20px;
  background-color: #f2f2f5;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 15px;
  border-radius: 30px;
  border: none;
  outline: none;
  font-size: 15px;

  &::placeholder {
    color: #848484;
    font-weight: 600;
  }
`;

export const BtnWrap = styled.div`
  position: relative;
`;

export const SendButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #5d60ef;
  border: none;
  border-radius: 50%;
  margin-left: -50px;
  margin-top: 7.5px;
`;

export const SendIcon = styled.img`
  width: 30px;
  position: absolute;
  top: 9.5px;
  transform: translateX(-107%);
`;
