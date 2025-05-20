export const requestPayment = ({
  channel,
  pay_method,
  amount,
  name,
  merchant_uid,
}) => {
  return new Promise((resolve, reject) => {
    const IMP = window.IMP;
    IMP.init(process.env.REACT_APP_PORTONE_MERCHANT_CODE);

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
