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
  TextWrap,
} from "../styles/components/notification.module";

const renderCancelNotice = (notice) => (
  <>
    주문이
    <HighlightText> {notice.explanation || "소롱포-재료소진"}</HighlightText>
    으로
    <br />
    <TextWrap noticeName={notice.noticeName}>취소되었습니다.</TextWrap>
  </>
);

const renderNewOrderNotice = () => (
  <>
    <HighlightText>새로운 주문</HighlightText>이 도착하였습니다!
  </>
);

const renderRequestNotice = (notice) => (
  <>
    <HighlightText>새로운 요청</HighlightText>이 도착하였습니다!
    <TextWrap>
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
    </TextWrap>
  </>
);

const messageMap = {
  "운영자의 주문 취소 알림": renderCancelNotice,
  "새로운 주문 도착 알림": renderNewOrderNotice,
  "요청 사항 알림": renderRequestNotice,
  default: () => <>알 수 없는 알림입니다.</>,
};

export default function NotificationModal({ isOpen, onClose, notice }) {
  if (!isOpen || !notice?.noticeName) return null;

  const renderMessage = messageMap[notice.noticeName] || messageMap.default;

  return (
    <ModalContainer>
      <Modal noticeName={notice.noticeName}>
        <ModalContent noticeName={notice.noticeName}>
          <ModalText noticeName={notice.noticeName}>
            {renderMessage(notice)}
          </ModalText>
        </ModalContent>
        <Button
          noticeName={notice.noticeName}
          onClick={() => {
            onClose();
            setTimeout(() => {
              window.location.reload();
            }, 100);
          }}
        >
          확인
        </Button>
      </Modal>
    </ModalContainer>
  );
}
