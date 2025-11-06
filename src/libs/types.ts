export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  error: string | null;
  meta: Record<string, unknown>;
}

export interface ApiProps<T> {
  onMutate?: (data: T) => void;
  onSuccess?: (res: ApiResponse<T>) => void;
  onError?: (error: unknown) => void;
}
