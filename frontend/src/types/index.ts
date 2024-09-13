import { ZodType } from "zod";

export type FormData = Record<string, any>;

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

export interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

export type UseFormProps<T extends ZodType<any, any>> = {
  schema: T;
};
