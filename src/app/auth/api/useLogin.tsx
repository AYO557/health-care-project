import type { ApiProps } from "@/libs/types";
import type { LoginPayload } from "../libs/types";

export default function useLoginApi({
  onMutate,
  onSuccess,
  onError,
}: ApiProps<LoginPayload> = {}) {
  const login = async (payload: LoginPayload) => {
    try {
      onMutate?.(payload);
      const response = await logUserService(payload);
      onSuccess?.(response);
    } catch (error) {
      onError?.(error);
    }
  };

  return {};
}
