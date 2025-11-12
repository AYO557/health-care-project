import React, { useContext, useState } from "react";
import AuthHeader from "../components";
import FormInput from "../../../components/ui/input";
import Button from "../../../components/ui/button";
import { Link, useNavigate } from "react-router";
import { User } from "lucide-react";
import type { SignupForm, SignupError, SignupPayload } from "../libs/types";
import { toast, Toaster } from "sonner";
import useSignupApi from "../api/useSignup";
import { AuthContext } from "../store/auth";

const SignupPage: React.FC = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const { signUserup } = useSignupApi({
    onSuccess: (response) => {
      toast.success(response.message || "User created successfully");

      login(response.data.user, response.data.token);

      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
    },
    onError: (error) => {
      toast.error(
        (error as { error: string })?.error ||
          (error as { message: string })?.message ||
          "Something went wrong"
      );
    },
  });

  const [signupData, setSignupData] = useState<SignupForm>({
    name: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<SignupError>({
    name: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSignupSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!signupData.name) {
      setError({
        ...error,
        name: "Name is required",
      });
      return;
    }

    if (signupData.name.length < 3) {
      setError({
        ...error,
        name: "Name must be at least 3 characters",
      });
      return;
    }

    if (!signupData.email) {
      setError({
        ...error,
        email: "Email is required",
      });
      return;
    }

    if (!signupData.phone) {
      setError({
        ...error,
        phone: "Phone is required",
      });
      return;
    }

    if (!signupData.password) {
      setError({
        ...error,
        password: "Password is required",
      });
      return;
    }

    if (signupData.password.length < 6) {
      setError({
        ...error,
        password: "Password must be at least 6 characters",
      });
      return;
    }

    if (!signupData.confirmPassword) {
      setError({
        ...error,
        confirmPassword: "Confirm password is required",
      });
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setError({
        ...error,
        confirmPassword: "Passwords do not match",
      });
      return;
    }

    const payload: SignupPayload = {
      first_name: signupData.name.split(" ")[0],
      last_name: signupData.name.split(" ")[1],
      email: signupData.email,
      password: signupData.password,
      phone_number: signupData.phone,
    };

    setLoading(true);
    await signUserup(payload);
    setLoading(false);
  };

  return (
    <>
      <AuthHeader title="Create an Account" desc="Please enter your details" />

      <form onSubmit={handleSignupSubmit} className="space-y-10">
        <div className="space-y-4">
          <FormInput
            label="Full Name"
            type="text"
            id="name"
            placeholder="Enter your name"
            icon={<User />}
            onChange={(name) => setSignupData({ ...signupData, name })}
            error={error.name}
            onFocus={() => setError({ ...error, name: "" })}
          />

          <FormInput
            label="Email"
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(email) =>
              setSignupData({
                ...signupData,
                email,
              })
            }
            error={error.email}
            onFocus={() => setError({ ...error, email: "" })}
          />

          <FormInput
            label="Phone"
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            onChange={(phone) =>
              setSignupData({
                ...signupData,
                phone,
              })
            }
            error={error.phone}
            onFocus={() => setError({ ...error, phone: "" })}
          />

          <FormInput
            label="Password"
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(password) =>
              setSignupData({
                ...signupData,
                password,
              })
            }
            error={error.password}
            onFocus={() => setError({ ...error, password: "" })}
          />

          <FormInput
            label="Confirm Password"
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
            onChange={(confirmPassword) =>
              setSignupData({
                ...signupData,
                confirmPassword,
              })
            }
            error={error.confirmPassword}
            onFocus={() => setError({ ...error, confirmPassword: "" })}
          />
        </div>

        <Button
          text={`${loading ? "Loading..." : "Create Account"}`}
          disabled={
            !signupData.name ||
            !signupData.email ||
            !signupData.phone ||
            !signupData.password ||
            !signupData.confirmPassword ||
            loading
          }
        />
      </form>

      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-primary">
          Sign in
        </Link>
      </p>

      <Toaster position="top-right" />
    </>
  );
};

export default SignupPage;
