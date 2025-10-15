import React from "react";
import FormInput from "@/components/ui/input";
import AuthHeader from "../components";
import Button from "@/components/ui/button";
import { Link } from "react-router";

const LoginPage: React.FC = () => {
  return (
    <>
      <AuthHeader title="Welcome Back" desc="Please sign in to continue" />

      <form className="space-y-10">
        <div>
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
              error="Password is required"
            />
          </div>
          <p className="text-sm text-right">
            <Link to="/auth/forgot-password">Forgot password?</Link>
          </p>
        </div>

        <Button text="submit" />
      </form>

      <p className="text-center text-sm">
        Don't have an account?{" "}
        <Link to="/auth/signup" className="text-primary">
          Sign up
        </Link>
      </p>
    </>
  );
};

export default LoginPage;
