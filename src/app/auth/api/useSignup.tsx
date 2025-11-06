import type { SignupPayload } from "../libs/types";
import createUser from "../services/createUser";
import type { ApiProps } from "@/libs/types";

export default function useSignupApi({
  onMutate,
  onSuccess,
  onError,
}: ApiProps<SignupPayload> = {}) {
  const signUserup = async (payload: SignupPayload) => {
    try {
      onMutate?.(payload);

      const response = await createUser(payload);

      onSuccess?.(response);

      return response.data;
    } catch (error: unknown) {
      console.error(error);
      onError?.(error);
    }
  };

  return {
    signUserup,
  };
}
