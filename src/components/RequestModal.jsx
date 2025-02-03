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
  Icon,
} from "../styles/components/requestModal.module";

export default function RequestModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <ModalContent>
          <ModalText>
            <span>새로운 요청이</span> 도착하였습니다!
          </ModalText>
          <TableWrap>
            <Icon>[</Icon>
            <Text>테이블</Text>
            <Num>- 5</Num>
            <Icon>]</Icon>
          </TableWrap>
        </ModalContent>
        <Button onClick={onClose}>확인</Button>
      </Modal>
    </ModalContainer>
  );
}
