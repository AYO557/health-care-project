import React, { useContext } from "react";
import FormInput from "@/components/ui/input";
import AuthHeader from "../components";
import Button from "@/components/ui/button";
import { Link } from "react-router";
import { type LoginPayload, type LoginError } from "../libs/types";
import useLoginApi from "../api/useLogin";
import { Toaster } from "sonner";
import { useNavigate } from "react-router";
import { AuthContext } from "../store/auth";
import useToastMessage from "@/hooks/useToastMessage";

const LoginPage: React.FC = () => {
  const { login } = useContext(AuthContext);
  const { toastSuccess, toastError, toastLoading } = useToastMessage();

  const navigate = useNavigate();
  const [loginData, setLoginData] = React.useState<LoginPayload>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<LoginError>({});

  const { login: loginApi } = useLoginApi({
    onMutate: () => {
      setError({});
      toastLoading("Logging in...");
      setLoading(true);
    },
    onSuccess: (response) => {
      toastSuccess("Login successful");
      setLoading(false);

      login(response.data.user, response.data.token);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
    onError: (error: unknown) => {
      setLoading(false);
      toastError(
        (error as { error: string })?.error ||
          (error as { message: string })?.message ||
          "Something went wrong"
      );
    },
  });

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loginData.email) {
      setError({
        email: "Email is required",
      });
      return;
    }

    if (!loginData.password) {
      setError({
        password: "Password is required",
      });
      return;
    }

    // validate password strength
    if (loginData.password.length < 6) {
      setError({
        password: "Password must be at least 6 characters",
      });
      return;
    }

    if (loginData.password.toLowerCase() === loginData.password) {
      setError({
        password: "Password must contain at least one uppercase letter",
      });
      return;
    }

    loginApi(loginData);
  };

  return (
    <>
      <AuthHeader title="Welcome Back" desc="Please sign in to continue" />

      <form onSubmit={handleLoginSubmit} className="space-y-10">
        <div>
          <div className="space-y-4">
            <FormInput
              label="Email"
              type="email"
              id="email"
              placeholder="Enter your email"
              error={error.email}
              onFocus={() => setError({ ...error, email: "" })}
              onChange={(val) =>
                setLoginData({
                  ...loginData,
                  email: val,
                })
              }
            />

            <FormInput
              label="Password"
              type="password"
              id="password"
              placeholder="Enter your password"
              error={error.password}
              onFocus={() => setError({ ...error, password: "" })}
              onChange={(val) =>
                setLoginData({
                  ...loginData,
                  password: val,
                })
              }
            />
          </div>
          <p className="text-sm text-right">
            <Link to="/auth/forgot-password">Forgot password?</Link>
          </p>
        </div>

        <Button
          text={`${loading ? "Logging in..." : "Login"}`}
          disabled={!loginData.email || !loginData.password || loading}
        />
      </form>

      <p className="text-center text-sm">
        Don't have an account?{" "}
        <Link to="/auth/signup" className="text-primary">
          Sign up
        </Link>
      </p>

      <Toaster position="top-right" />
    </>
  );
};

export default LoginPage;
