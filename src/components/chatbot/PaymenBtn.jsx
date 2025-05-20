import { useEffect, useState } from "react";

export default function PaymentBtn({
  productName,
  amount,
  merchantUid,
  onSuccess,
}) {
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    console.log("스크립트 삽입 시도");
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/js/iamport.payment-v1.js";
    script.async = true;

    script.onload = () => console.log("스크립트 로드 완료");
    script.onerror = () => console.error("스크립트 로드 실패");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (!sdkLoaded || !window.PortOne) {
      alert("PortOne SDK가 아직 로드되지 않았습니다.");
      return;
    }

    const storeId = process.env.REACT_APP_PORTONE_CLIENT_KEY;

    window.PortOne.requestPayment({
      storeId: storeId,
      paymentId: merchantUid,
      orderName: productName,
      totalAmount: amount,
      payMethod: "CARD",
    })
      .then((res) => {
        if (res.code === "SUCCESS") {
          alert("결제 성공!");
          if (onSuccess) onSuccess(res);
        } else {
          alert("결제 실패: " + res.message);
        }
      })
      .catch((err) => {
        alert("결제 중 오류: " + err.message);
      });
  };

  return <button onClick={handlePayment}>결제하기</button>;
}
