import { User } from "../types/index.ts";

let users: User[] = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    password: "password123",
    role: "user",
  },
  {
    id: 2,
    name: "admin",
    email: "admin@example.com",
    password: "password456",
    role: "admin",
  },
];

export const signUp = async (userData: {
  name: string;
  email: string;
  password: string;
}): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (users.some((user) => user.email === userData.email)) {
    throw new Error("Email already exists");
  }

  const newUser: User = { id: users.length + 1, ...userData };
  users.push(newUser);
  return newUser;
};

export const login = async (credentials: {
  email: string;
  password: string;
}): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = users.find(
    (u) => u.email === credentials.email && u.password === credentials.password
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  return user;
};
