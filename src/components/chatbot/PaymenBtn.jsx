import { useEffect, useState } from "react";

export default function PaymentBtn({
  productName,
  amount,
  merchantUid,
  onSuccess,
}) {
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    console.log("SDK 스크립트 삽입 시도");

    // SDK 중복 로딩 방지
    if (window.IMP) {
      setSdkLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/js/iamport.payment-1.2.0.js";
    script.async = true;

    script.onload = () => {
      console.log("SDK 스크립트 로드 완료");
      setSdkLoaded(true);
    };
    script.onerror = () => {
      console.error("SDK 스크립트 로드 실패");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (!sdkLoaded || !window.IMP) {
      alert("PortOne SDK가 아직 로드되지 않았습니다.");
      return;
    }

    const IMP = window.IMP;
    IMP.init(process.env.REACT_APP_PORTONE_MERCHANT_CODE);

    IMP.request_pay(
      {
        pg: "inicis_v2",
        pay_method: "card",
        merchant_uid: merchantUid,
        name: productName,
        amount: amount,
      },
      function (rsp) {
        if (rsp.success) {
          alert("결제 성공!");
          if (onSuccess) onSuccess(rsp);
        } else {
          alert("결제 실패: " + rsp.error_msg);
        }
      }
    );
  };

  return <button onClick={handlePayment}>결제하기</button>;
}
