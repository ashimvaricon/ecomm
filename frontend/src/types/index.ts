import { ZodType, ZodUnknown } from "zod";

export type FormData = Record<string, unknown>;

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading?: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

export type UseFormProps<T extends ZodType<unknown, ZodUnknown>> = {
  schema: T;
};
