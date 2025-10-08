import React from "react";
import AuthHeader from "../components";
import FormInput from "../../../components/ui/input";
import Button from "../../../components/ui/button";
import { Link } from "react-router";

const SignupPage: React.FC = () => {
  return (
    <>
      <AuthHeader title="Create an Account" desc="Please enter your details" />

      <form className="space-y-10">
        <div className="space-y-4">
          <FormInput
            label="Full Name"
            type="text"
            id="name"
            placeholder="Enter your name"
          />

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
            error="Password is required"
          />

          <FormInput
            label="Confirm Password"
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
          />
        </div>

        <Button text="submit" />
      </form>

      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-primary">
          Sign in
        </Link>
      </p>
    </>
  );
};

export default SignupPage;
