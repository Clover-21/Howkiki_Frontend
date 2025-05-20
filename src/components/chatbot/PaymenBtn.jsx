import { useEffect, useState } from "react";

export default function PaymentBtn({
  productName,
  amount,
  merchantUid,
  onSuccess,
}) {
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.portone.io/v1/js-sdk.js";
    script.async = true;

    script.onload = () => {
      setSdkLoaded(true);
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
