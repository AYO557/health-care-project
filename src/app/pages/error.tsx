import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);

  setInterval(() => {
    setCount(count - 1);
  }, 1000);

  if (count === 0) {
    navigate("/auth/login");
  }
  return (
    <div className="h-screen bg-darkgreen text-white flex justify-center items-center">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl text-red-500 font-bold">
          500 - Oops! Something went wrong.
        </h1>
        <div className="space-y-2 italic">
          <p>We are working on it. Please try again later.</p>
          <p>
            Go back to{" "}
            <Link className="text-lightgreen hover:underline" to="/">
              previous page
            </Link>{" "}
            in <span className="text-lightgreen">{count}</span> seconds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
