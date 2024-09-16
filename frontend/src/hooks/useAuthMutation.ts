import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { signUp as signUpApi, login as loginApi } from "../services/api";
import { useAuth } from "./useAuth";
import { FormData, SignUpFormData, LoginFormData } from "../types/index";

interface UseAuthMutationResult {
  errorMessage: string | null;
  isLoading: boolean;
  mutate: (data: SignUpFormData | LoginFormData) => void;
}

const useAuthMutation = (
  apiFunc: typeof signUpApi | typeof loginApi
): UseAuthMutationResult => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const mutation = useMutation(apiFunc, {
    onSuccess: (data) => {
      login(data as FormData);
      navigate("/");
    },
    onError: (error: any) => {
      setErrorMessage(error.message || "An error occurred");
    },
  });

  const mutate = (data: SignUpFormData | LoginFormData) => {
    setErrorMessage(null);
    mutation.mutate(data);
  };

  return {
    errorMessage,
    isLoading: mutation.isLoading,
    mutate,
  };
};

export default useAuthMutation;
