import { useEffect, useState } from "react";

export default function PaymentBtn({
  productName,
  amount,
  merchantUid,
  onSuccess,
}) {
  const [portone, setPortone] = useState(null);

  useEffect(() => {
    // 이미 SDK가 로드되어 있으면 바로 초기화
    if (window.loadPortOne) {
      window
        .loadPortOne()
        .then(setPortone)
        .catch((err) => {
          console.error("PortOne 초기화 실패", err);
        });
      return;
    }

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

    // cleanup에서 스크립트 제거하지 않음 (한 번만 로드 유지)
  }, []);

  const handlePayment = async () => {
    if (!portone) {
      alert("PortOne SDK가 아직 준비되지 않았습니다.");
      return;
    }

    // 환경변수명 주의!
    const storeId = process.env.REACT_APP_PORTONE_MERCHANT_CODE;

    if (!storeId) {
      alert("storeId(클라이언트 키)가 설정되어 있지 않습니다.");
      return;
    }

    if (!merchantUid) {
      alert("결제 고유 ID(merchantUid)가 필요합니다.");
      return;
    }

    try {
      const result = await portone.requestPayment({
        storeId: storeId,
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
