import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export default function PaymentBtn({
  productName,
  amount,
  merchantUid,
  onSuccess,
}) {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);

  useEffect(() => {
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
      } else {
        console.error("포트원 SDK 로드 실패");
      }
    };

    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    if (!window.IMP || !isSDKLoaded) return;

    const IMP = window.IMP;
    IMP.request_pay(
      {
        channel: process.env.REACT_APP_PORTONE_CHANNEL_KEYㄴ,
        pay_method: "card",
        merchant_uid: merchantUid,
        name: productName,
        amount: amount,
      },
      function (rsp) {
        if (rsp.success) {
          toast.success("결제 성공!");
          if (onSuccess) onSuccess(); // 여기서 호출
        } else {
          toast.error("결제 실패: " + rsp.error_msg);
        }
      }
    );
  };

  return (
    <button onClick={handlePayment} disabled={!isSDKLoaded}>
      결제하기
    </button>
  );
}

PaymentBtn.propTypes = {
  productName: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  merchantUid: PropTypes.string.isRequired,
  onSuccess: PropTypes.func, // 추가
};
