import { User, SignUpFormData, LoginFormData } from "../types/index.ts";
import { USERS } from "../constants/userData.ts";

export const signUp = async (userData: SignUpFormData): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (USERS.some((user) => user.email === userData.email)) {
    throw new Error("Email already exists");
  }

  const newUser: User = { id: USERS.length + 1, ...userData, role: "user" };
  USERS.push(newUser);
  return newUser;
};

export const login = async (credentials: LoginFormData): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = USERS.find(
    (u) => u.email === credentials.email && u.password === credentials.password
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  return user;
};
