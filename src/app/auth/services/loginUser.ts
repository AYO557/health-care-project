import type { ApiResponse } from "@/libs/types";
import type { LoginPayload } from "../libs/types";
import { apiUrl } from "@/libs/constants";

const loginService = async (payload: LoginPayload) => {
  const response = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  // convert the response (promise) to json
  const data: ApiResponse<LoginPayload> = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || data?.message || "Something went wrong");
  }

  return data;
};

export default loginService;
