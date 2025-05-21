import { useEffect } from "react";
import axios from "axios";

export default function PaymentBtn({
  productName,
  amount,
  merchantUid,
  onSuccess,
}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/js/iamport.payment-1.2.0.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
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
          alert("결제 성공!");
          try {
            const res = await axios.post(`/api/payments/verification`, {
              imp_uid: rsp.imp_uid,
              merchant_uid: rsp.merchant_uid,
              amount: rsp.paid_amount,
            });

            if (res.data.success) {
              alert("서버 결제 검증 성공!");
              if (onSuccess) onSuccess(rsp);
            } else {
              alert("서버 검증 실패: " + res.data.message);
            }
          } catch (err) {
            console.error("서버 통신 오류", err);
            alert("서버 검증 중 오류가 발생했습니다.");
          }
        } else {
          alert("결제 실패: " + rsp.error_msg);
        }
      }
    );
  };

  return <button onClick={handlePayment}>결제하기</button>;
}
