import React from "react";
import AuthHeader from "../components";
import FormInput from "../../../components/ui/input";
import Button from "../../../components/ui/button";
import { useNavigate } from "react-router";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <AuthHeader
        title="Forgot Password"
        desc="Please enter your email to reset your password."
        showBack
      />

      <form className="space-y-10">
        <FormInput
          label="Email"
          type="email"
          id="email"
          placeholder="Enter your email"
        />

        <Button
          onClick={() => {
            navigate("/auth/reset-password");
          }}
          text="Send Reset Link"
        />
      </form>
    </>
  );
};

export default ForgotPassword;
