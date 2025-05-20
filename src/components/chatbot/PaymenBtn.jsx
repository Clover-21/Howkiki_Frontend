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

    if (window.PortOne) {
      setSdkLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.portone.io/v1/js-sdk.js";
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
    if (!sdkLoaded || !window.PortOne) {
      alert("PortOne SDK가 아직 로드되지 않았습니다.");
      return;
    }

    const storeId = process.env.REACT_APP_PORTONE_CLIENT_KEY;

    const portone = new window.PortOne(
      process.env.REACT_APP_PORTONE_CHANNEL_KEY
    );

    portone
      .requestPayment({
        storeId: storeId,
        paymentId: merchantUid,
        orderName: productName,
        totalAmount: amount,
        currency: "KRW",
        payMethod: "CARD",
      })
      .then((res) => {
        alert("결제 성공!");
        if (onSuccess) onSuccess(res);
      })
      .catch((err) => {
        alert("결제 실패: " + err.message);
        console.error("결제 실패", err);
      });
  };

  return <button onClick={handlePayment}>결제하기</button>;
}
