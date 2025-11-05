import React, { useState } from "react";
import AuthHeader from "../components";
import FormInput from "../../../components/ui/input";
import Button from "../../../components/ui/button";
import { Link, useNavigate } from "react-router";
import { User } from "lucide-react";
import type { ApiResponse, SignupPayload } from "../libs/types";
import { toast, Toaster } from "sonner";

interface SignupForm {
  name: string;
  email: string;
  password: string;
  phone: string;
  confirmPassword: string;
}

interface SignupError {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

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
    await signupApi(payload);
    setLoading(false);
  };

  const apiUrl = "http://localhost:5000/api/v1/users";
  const signupApi = async (payload: SignupPayload) => {
    try {
      const response: Response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const err = await response.json();
        throw err;
      }

      const data: ApiResponse<SignupPayload> = await response.json();

      if (data.success) {
        toast.success(data.message);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(
        (error as ApiResponse<SignupPayload>)?.error || "Something went wrong"
      );
    }
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
