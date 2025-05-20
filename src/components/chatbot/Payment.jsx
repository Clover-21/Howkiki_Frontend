export const requestPayment = ({
  channel,
  pay_method,
  amount,
  name,
  merchant_uid,
}) => {
  return new Promise((resolve, reject) => {
    const IMP = window.IMP;

    if (!IMP) {
      reject("PortOne SDK가 로드되지 않았습니다.");
      return;
    }

    IMP.request_pay(
      {
        channel,
        pay_method,
        amount,
        name,
        merchant_uid,
      },
      function (rsp) {
        if (rsp.success) {
          resolve(rsp);
        } else {
          reject(rsp);
        }
      }
    );
  });
};
