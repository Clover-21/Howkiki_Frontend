import { useEffect } from "react";
import { apiClient } from "../../api/apiClient";
import {
  BtnContainer,
  Button,
} from "../../styles/components/userCancelModal.module";

export default function PaymentBtn({
  productName,
  amount,
  merchantUid,
  orderId,
  onSuccess,
}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/js/iamport.payment-1.2.0.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = (event) => {
    if (event) event.preventDefault();
    console.log("handlePayment 호출됨");

    if (!window.IMP) {
      alert("결제 SDK가 로드되지 않았습니다.");
      return;
    }

    const storeId = process.env.REACT_APP_PORTONE_MERCHANT_CODE;

    if (!storeId) {
      alert("storeId(가맹점 식별코드)가 설정되지 않았습니다.");
      return;
    }

    const IMP = window.IMP;
    IMP.init(storeId);

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    sessionStorage.setItem("pendingOrderId", orderId);

    const params = {
      pg: "html5_inicis",
      pay_method: "card",
      merchant_uid: merchantUid,
      name: productName,
      amount: amount,
    };

    if (isMobile) {
      params.m_redirect_url = window.location.href; // 현재 페이지로 돌아오게
    }

    console.log("request_pay 호출됨");
    IMP.request_pay(params, async function (rsp) {
      // 모바일에서는 이 콜백이 호출되지 않음
      if (rsp.success) {
        try {
          const res = await apiClient.post(`/payments/verification`, {
            impUid: rsp.imp_uid,
            merchantUid: rsp.merchant_uid,
            orderId,
          });
          if (res.data?.data?.payStatus === "paid") {
            if (onSuccess) onSuccess(rsp);
          }
        } catch (err) {
          console.error("결제 검증 오류", err);
        }
      }
    });
  };

  return (
    <BtnContainer>
      <Button onClick={handlePayment}>결제하기</Button>
    </BtnContainer>
  );
}
