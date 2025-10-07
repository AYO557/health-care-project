import React from "react";
import FormInput from "../../../components/ui/input";
import AuthHeader from "../components";
import Button from "../../../components/ui/button/button";

const LoginPage: React.FC = () => {
  return (
    <>
      <AuthHeader title="Welcome" desc="Please sign in to continue" />

      <form className="space-y-10">
        <div className="space-y-4">
          <FormInput
            label="Email"
            type="email"
            id="email"
            placeholder="Enter your email"
          />

          <FormInput
            label="Password"
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        <Button text="submit" />
      </form>
    </>
  );
};

export default LoginPage;
