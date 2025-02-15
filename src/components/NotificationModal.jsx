import React from "react";
import {
  ModalContainer,
  Modal,
  ModalContent,
  ModalText,
  Button,
  TableWrap,
  TableText,
  Icon,
  RequestText,
  HighlightText,
} from "../styles/components/notification.module";

export default function NotificationModal({ isOpen, onClose, notice }) {
  if (!isOpen || !notice) return null;

  const messageMap = {
    "운영자의 주문 취소 알림": (
      <>
        주문이 <HighlightText>{notice.explanation}</HighlightText> 으로
        <br />
        취소되었습니다.
      </>
    ),
    "새로운 주문 알림": (
      <>
        <HighlightText>새로운 주문</HighlightText>이 도착하였습니다!
      </>
    ),
    "새로운 요청 알림": (
      <>
        <HighlightText>새로운 요청</HighlightText>이 도착하였습니다!
        <TableWrap>
          <Icon>[</Icon>
          <TableText>
            {notice.isTakeOut
              ? `포장 - ${notice.orderId ?? "-"}`
              : `테이블 - ${notice.tableNumber ?? "-"}`}
          </TableText>
          <Icon>]</Icon>
        </TableWrap>
        <RequestText>" {notice.content ?? "요청 내용 없음"} "</RequestText>
      </>
    ),
  };

  const renderMessage = () =>
    messageMap[notice.noticeName] ?? <>알 수 없는 알림입니다.</>;

  return (
    <ModalContainer>
      <Modal>
        <ModalContent>
          <ModalText>{renderMessage()}</ModalText>
        </ModalContent>
        <Button onClick={onClose}>확인</Button>
      </Modal>
    </ModalContainer>
  );
}
