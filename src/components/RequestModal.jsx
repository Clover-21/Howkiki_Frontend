import React from "react";
import {
  ModalContainer,
  Modal,
  ModalContent,
  ModalText,
  Button,
  TableWrap,
  Text,
  Num,
} from "../styles/components/newOrderModal.module";

export default function NewOrderModal({ isOpen, onClose, num }) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <ModalContent>
          <ModalText>
            <span>새로운 요청이</span> 도착하였습니다!
          </ModalText>
          <TableWrap>
            <Text>테이블</Text>
            <Num>- {num}</Num>
          </TableWrap>
        </ModalContent>
        <Button onClick={onClose}>확인</Button>
      </Modal>
    </ModalContainer>
  );
  ㄴ;
}
