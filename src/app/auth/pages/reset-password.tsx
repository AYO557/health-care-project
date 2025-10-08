import React from "react";
import AuthHeader from "../components";
import FormInput from "../../../components/ui/input";
import Button from "../../../components/ui/button";

const ResetPassword: React.FC = () => {
  return (
    <>
      <AuthHeader
        title="Reset Password"
        desc="Please enter your new password"
      />

      <form className="space-y-10">
        <div className="space-y-4">
          <FormInput
            label="New Password"
            type="password"
            id="password"
            placeholder="Enter your password"
            error="Password is required"
          />

          <FormInput
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            placeholder="Enter your password"
            error="Password is required"
          />
        </div>

        <Button text="Reset Password" />
      </form>
    </>
  );
};

export default ResetPassword;
