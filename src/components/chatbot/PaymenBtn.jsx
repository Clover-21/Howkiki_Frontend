import { useEffect } from "react";

export default function PaymentBtn({
  productName,
  amount,
  merchantUid,
  onSuccess,
}) {
  useEffect(() => {
    // IMP SDK 스크립트 로드
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
        pg: "html5_inicis", // PG사 코드 (필요에 따라 변경)
        pay_method: "card", // 결제수단
        merchant_uid: merchantUid, // 고유 주문번호
        name: productName, // 상품명
        amount: amount, // 결제금액
      },
      function (rsp) {
        if (rsp.success) {
          alert("결제 성공!");
          if (onSuccess) onSuccess(rsp);
        } else {
          alert("결제 실패: " + rsp.error_msg);
          console.error("결제 실패", rsp);
        }
      }
    );
  };

  return <button onClick={handlePayment}>결제하기</button>;
}
