import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../api/apiClient";
import {
  Title,
  BtnContainer,
  Button,
} from "../../styles/chatbot/chatOrderSuccess.module";

export default function ChatOrderSuccess() {
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();
  const [storeId, setStoreId] = useState("");
  const [tableNumber, setTableNumber] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const impUid = query.get("imp_uid");
    const merchantUid = query.get("merchant_uid");
    const storeIdFromUrl = query.get("storeId");
    const tableNumberFromUrl = query.get("tableNumber");
    const orderId = query.get("orderId");

    setStoreId(storeIdFromUrl);
    setTableNumber(tableNumberFromUrl);

    async function verifyPayment() {
      try {
        const rsp = await apiClient.post(`/payments/verification`, {
          impUid: rsp.imp_uid,
          merchantUid: rsp.merchant_uid,
          orderId: orderId,
        });

        if (rsp.data?.data?.payStatus === "paid") {
          setIsVerified(true);
        } else {
          console.log("서버 검증 실패: " + rsp.data.message);
        }
      } catch (err) {
        console.error("서버 통신 오류", err);
      }
    }

    if (impUid && merchantUid) {
      verifyPayment();
    }
  }, []);

  if (!isVerified) {
    return <p>결제 검증 중입니다...</p>;
  }

  return (
    <>
      <Title>주문이 완료되었습니다!</Title>
      <BtnContainer>
        <Button onClick={() => navigate(`/chatbot/${storeId}/${tableNumber}`)}>
          챗오더로 돌아가기
        </Button>
      </BtnContainer>
    </>
  );
}
