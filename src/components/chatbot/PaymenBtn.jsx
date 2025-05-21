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
    IMP.init(imp12345678);
    /*
    IMP.init(storeId);*/

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: merchantUid,
        name: productName,
        amount: amount,
      },
      async function (rsp) {
        console.log("결제 응답 rsp:", rsp);

        if (rsp.success) {
          console.log("결제 성공");
          try {
            const res = await apiClient.post(`/api/payments/verification`, {
              imp_uid: rsp.imp_uid,
              merchant_uid: rsp.merchant_uid,
              orderId: orderId,
            });

            console.log(res.data);

            if (res.data.success) {
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
