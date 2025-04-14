import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const ChatContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  max-width: 430px;
  background-color: #f2f2f5;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
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
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
  margin-left: ${({ sender }) => (sender === "bot" ? "8px" : "")};
`;

export const Message = styled.div`
  width: fit-content;
  max-width: 80%;
  word-wrap: break-word;
  white-space: pre-wrap;
  padding: 14px;
  border-radius: 20px;
  font-size: 14px;
  line-height: 20px;
  color: ${({ sender }) => (sender === "bot" ? "#000000" : "#ffffff")};
  background-color: ${({ sender }) =>
    sender === "bot" ? "#ffffff" : "#5D60EF"};
  align-self: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};

  @media screen and (min-width: 430px) {
    font-size: 15px;
  }
`;

export const BotIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-left: -10px;
  margin-bottom: 5px;

  @media screen and (min-width: 430px) {
    width: 38px;
    height: 38px;
  }
`;

export const ChatInput = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 30px;
  background-color: #f2f2f5;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: white;
  border-radius: 25px;
  padding: 5px 12px;
  width: 100%;
  gap: 8px;
  min-width: 0;
  box-sizing: border-box;
`;

export const InputField = styled.textarea`
  flex: 1;
  min-width: 0;
  resize: none;
  border: none;
  outline: none;
  font-size: 15px;
  line-height: 1.5;
  max-height: 78px;
  overflow-y: auto;
  padding: 8px 0;

  min-width: 0;
  box-sizing: border-box;

  &::placeholder {
    color: #888;
  }
`;

export const SendButton = styled.button`
  flex-shrink: 0;
  background-color: #5d60ef;
  border: none;
  border-radius: 9999px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: translateY(-1px);

  &:hover {
    background-color: #4f46e5;
  }
`;

export const SendIcon = styled.img`
  width: 18px;
  height: 18px;
  position: relative;
  top: 1px;
  right: 1px;
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const HsIcon = styled.img`
  width: 43px;
  margin-right: 13px;
`;
