import React from "react";
import {
  ModalContainer,
  Modal,
  ModalContent,
  ModalText,
  HighlightText,
  BtnWrap,
  Button,
  TableWrap,
  TableText,
  Num,
  Icon,
  RequestText,
} from "../../styles/components/requestModal.module";

export default function RequestModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <ModalContent>
          <ModalText>
            <HighlightText>새로운 요청</HighlightText>이 도착하였습니다!
          </ModalText>
          <TableWrap>
            <Icon>[</Icon>
            <TableText>테이블</TableText>
            <Num> -5</Num>
            <Icon>]</Icon>
          </TableWrap>
          <RequestText>" 난방 온도 좀 낮춰주세요 "</RequestText>
        </ModalContent>
        <BtnWrap>
          <Button onClick={onClose}>확인</Button>
        </BtnWrap>
      </Modal>
    </ModalContainer>
  );
}
