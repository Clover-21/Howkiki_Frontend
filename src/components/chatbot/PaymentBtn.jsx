import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const { storeId, tableNumber } = useParams();

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

    const merchantCode = process.env.REACT_APP_PORTONE_MERCHANT_CODE;

    if (!merchantCode) {
      alert("storeId(가맹점 식별코드)가 설정되지 않았습니다.");
      return;
    }

    const IMP = window.IMP;
    IMP.init(merchantCode);

    console.log("request_pay 호출됨");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: merchantUid,
        name: productName,
        amount: amount,
        m_redirect_url: `${window.location.origin}/orderSuccess?storeId=${storeId}&tableNumber=${tableNumber}`,
      },
      async function (rsp) {
        console.log("결제 응답 rsp:", rsp);

        if (rsp.success) {
          console.log("결제 성공");
          try {
            const res = await apiClient.post(`/payments/verification`, {
              impUid: rsp.imp_uid,
              merchantUid: rsp.merchant_uid,
              orderId: orderId,
            });

            console.log(res.data);

            if (res.data?.data?.payStatus === "paid") {
              console.log("서버 결제 검증 성공!");
              if (onSuccess) onSuccess(rsp);
            } else {
              console.log("서버 검증 실패: " + res.data.message);
            }
          } catch (err) {
            console.error("서버 통신 오류", err);
          }
        } else {
          console.log("결제 실패: " + rsp.error_msg);
        }
      }
    );
  };

  return (
    <BtnContainer>
      <Button onClick={handlePayment}>결제하기</Button>
    </BtnContainer>
  );
}
