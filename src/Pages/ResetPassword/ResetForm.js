import React, { useEffect, useState } from "react";
import Form from "../../Components/Form";
import routes from "../../Helper/routes";
import { getQueryData } from "../../Helper";
import { toast } from "react-toastify";

const ResetForm = (props) => {
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    token: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (props.location) {
      const data = getQueryData(props?.location?.search);
      setValues((prevState) => ({
        ...prevState,
        token: data.token,
      }));
    }
  }, [props]);

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
    if (
      values.token !== "" &&
      values.password !== "" &&
      values.confirmPassword !== ""
    ) {
      try {
        await props.resetPassword(values).then((res) => {
          toast.success(res.message);
          props.history.push(routes.login);
        });
      } finally {
        setApiCall(false);
      }
    }
  };
  return (
    <Form
      name="reset-password-form"
      submitHandler={submitHandler}
      className="sl-form"
    >
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          required=""
          name="password"
          value={values.password}
          onChange={handlerChange}
          className={
            "form-control" +
            (submitted && !values.password ? " is-invalid" : "")
          }
        />
        {submitted && !values.password && (
          <div className="invalid-feedback">Password is required</div>
        )}
      </div>
      <div className="form-group">
        <label>Conform Password</label>
        <input
          type="password"
          placeholder="Conform Password"
          required=""
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handlerChange}
          className={
            "form-control" +
            (submitted && !values.confirmPassword ? " is-invalid" : "")
          }
        />
        {submitted && !values.confirmPassword && (
          <div className="invalid-feedback">Conform Password is required</div>
        )}
      </div>
      <button
        className="btn btn-filled btn-round"
        onClick={submitHandler}
        disabled={apiCall}
      >
        <span>{apiCall ? "Loading..." : "Reset Password"}</span>
      </button>
    </Form>
  );
};

export default ResetForm;
