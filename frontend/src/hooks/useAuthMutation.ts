import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { signUp, login } from "../services/api";
import { useAuth } from "./useAuth";
import { SignUpFormData, LoginFormData, User } from "../types";

type AuthFunction = typeof signUp | typeof login;

interface UseAuthMutationResult {
  errorMessage: string | null;
  isLoading: boolean;
  mutate: (data: SignUpFormData | LoginFormData) => Promise<void>;
}

const useAuthMutation = (authFunction: AuthFunction): UseAuthMutationResult => {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const mutation = useMutation(authFunction, {
    onSuccess: (data: User) => {
      authLogin(data);
      if (data.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    },
    onError: (error: Error) => {
      setErrorMessage(error.message || "An error occurred");
    },
  });

  const mutate = async (data: SignUpFormData | LoginFormData) => {
    setErrorMessage(null);
    await mutation.mutateAsync(data);
  };

  return {
    errorMessage,
    isLoading: mutation.isLoading,
    mutate,
  };
};

export default useAuthMutation;
