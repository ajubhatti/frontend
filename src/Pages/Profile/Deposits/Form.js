import React, { useState } from "react";
import Form from "../../../Components/Form";

const DepositsForm = (props) => {
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    depositBank: "",
    depositBranch: "",
    amountType: "credit",
    amount: 0,
    slipNo: "",
    note: "",
    remark: "",
    paymentType: 1,
    bank: "",
    debitAmount: 0,
    creditAmount: 0,
    finalWalletAmount: 0,
    referenceNo: "",
    password: "",
    requestAmount: 0,
    approveBy: "",
  });

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setApiCall(true);
    setSubmitted(true);
    if (values.name !== "") {
      try {
        //   await props.login(values).then(() => {
        //     props.history.push(routes.home);
        //   });
      } finally {
        setApiCall(false);
      }
    }
  };

  return (
    <div className="container">
      <Form name="login-form" submitHandler={submitHandler}>

      </Form>
    </div>
  );
};

export default DepositsForm;
