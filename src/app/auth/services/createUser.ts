import type { ApiResponse } from "@/libs/types";
import type { SignupPayload } from "../libs/types";
import { apiUrl } from "@/libs/constants";

const createUserService = async (payload: SignupPayload) => {
  // make a post request to the api
  const response: Response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  // convert the response (promise) to json
  const data: ApiResponse<SignupPayload> = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || data?.message || "Something went wrong");
  }

  return data;
};

export default createUserService;
