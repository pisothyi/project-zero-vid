import React from "react";
import "./SignUpPage.css";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
const SignUpPage = () => {
  return (
    <div className="sign-up-form-body">
      <div className="sign-up-form-container">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
