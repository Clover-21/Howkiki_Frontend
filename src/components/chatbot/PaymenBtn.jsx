import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export default function PaymentBtn({ productName, amount, merchantUid }) {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);

  useEffect(() => {
    // SDK가 이미 로드됐는지 체크
    if (window.IMP) {
      window.IMP.init(process.env.REACT_APP_PORTONE_MERCHANT_CODE);
      setIsSDKLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/v1/iamport.js";
    script.async = true;

    script.onload = () => {
      if (window.IMP) {
        window.IMP.init(process.env.REACT_APP_PORTONE_MERCHANT_CODE);
        setIsSDKLoaded(true);
        console.log("포트원 SDK 로드 완료");
      } else {
        console.error("포트원 SDK를 찾을 수 없습니다.");
      }
    };

    script.onerror = () => {
      console.error("포트원 SDK 로드 중 오류 발생");
    };

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (!isSDKLoaded || !window.IMP) {
      console.error("포트원 SDK가 로드되지 않았습니다.");
      toast.error("결제 시스템 로드 실패, 잠시 후 다시 시도해주세요.");
      return;
    }

    const paymentData = {
      channel: process.env.REACT_APP_PORTONE_CHANNEL_KEY,
      pay_method: "card",
      merchant_uid: merchantUid,
      name: productName,
      amount: amount,
    };

    window.IMP.request_pay(paymentData, (response) => {
      if (response.success) {
        toast.success("결제가 완료되었습니다.");
        if (onSuccess) onSuccess();
      } else {
        toast.error(`결제 실패: ${response.error_msg}`);
      }
    });
  };

  return (
    <button onClick={handlePayment} disabled={!isSDKLoaded}>
      {amount.toLocaleString()}원 결제하기
    </button>
  );
}

PaymentBtn.propTypes = {
  productName: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  merchantUid: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
};
