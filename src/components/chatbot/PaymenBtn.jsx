import { useEffect, useState } from "react";

export default function PaymentBtn({
  productName,
  amount,
  merchantUid,
  onSuccess,
}) {
  const [portone, setPortone] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.portone.io/v2/browser-sdk.js";
    script.async = true;

    script.onload = async () => {
      console.log("PortOne SDK 로드 완료");

      if (window.loadPortOne) {
        try {
          const loadedPortOne = await window.loadPortOne();
          setPortone(loadedPortOne);
        } catch (err) {
          console.error("PortOne 초기화 실패", err);
        }
      } else {
        console.error("window.loadPortOne 함수가 없습니다");
      }
    };

    script.onerror = () => {
      console.error("PortOne SDK 로드 실패");
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    if (!portone) {
      alert("PortOne SDK가 아직 준비되지 않았습니다.");
      return;
    }

    try {
      const result = await portone.requestPayment({
        storeId: process.env.REACT_APP_PORTONE_CLIENT_KEY,
        paymentId: merchantUid,
        orderName: productName,
        totalAmount: amount,
        currency: "KRW",
        payMethod: "CARD",
      });

      alert("결제 성공!");
      if (onSuccess) onSuccess(result);
    } catch (err) {
      alert("결제 실패: " + err.message);
      console.error("결제 실패", err);
    }
  };

  return <button onClick={handlePayment}>결제하기</button>;
}
