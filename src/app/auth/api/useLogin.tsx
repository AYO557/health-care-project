import type { ApiProps } from "@/libs/types";
import type { LoginPayload, SignupResponse } from "../libs/types";
import loginService from "../services/loginUser";

export default function useLoginApi({
  onMutate,
  onSuccess,
  onError,
}: ApiProps<SignupResponse, LoginPayload> = {}) {
  const login = async (payload: LoginPayload) => {
    try {
      onMutate?.(payload);
      const response = await loginService(payload);
      onSuccess?.(response);
    } catch (error) {
      onError?.(error);
    }
  };

  return {
    login,
  };
}
