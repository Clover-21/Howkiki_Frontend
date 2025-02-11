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
  display: flex;
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  width: fit-content;
  max-width: 80%;
  word-wrap: break-word;
  white-space: pre-wrap;
  padding: 14px;
  border-radius: 20px;
  font-size: 13px;
  line-height: 18px;
  color: ${({ sender }) => (sender === "bot" ? "#000000" : "#ffffff")};
  background-color: ${({ sender }) =>
    sender === "bot" ? "#ffffff" : "#5D60EF"};
  margin-bottom: ${({ sender }) => (sender === "bot" ? "5px" : "15px")};
  margin-top: ${({ sender }) => (sender === "user" ? "15px" : "5px")};
  align-self: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
  margin-left: ${({ sender }) => (sender === "bot" ? "8px" : "")};
  margin-right: ${({ sender }) => (sender === "bot" ? "" : "8px")};
`;

export const BotIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
`;

export const ChatInput = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 30px;
  background-color: #f2f2f5;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

export const InputField = styled.textarea`
  flex: 1;
  height: 40px;
  min-height: 42px;
  max-height: 78px;
  overflow-y: auto;
  resize: none;
  padding: 12px;
  padding-right: 50px;
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 12.5px;
  line-height: 18px;
  box-sizing: border-box;
  backgrount-color: #ffffff;

  &::placeholder {
    color: #848484;
    font-size: 12.5px;
    font-weight: 600;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SendButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #5d60ef;
  border: none;
  border-radius: 50%;
  margin-left: -39px;
  margin-top: 7px;
`;

export const BtnWrap = styled.div`
  position: relative;
`;

export const SendIcon = styled.img`
  width: 25px;
  position: absolute;
  top: 8px;
  transform: translateX(-103%);
`;

export const HsIcon = styled.img`
  width: 43px;
  margin-right: 13px;
`;
