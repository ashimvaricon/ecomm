import { z } from "zod";
import { VALIDATION_MESSAGES } from "../constants/ValidationMessage";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(1, VALIDATION_MESSAGES.NAME_REQUIRED)
    .min(5, VALIDATION_MESSAGES.NAME_MIN_LENGTH),

  email: z
    .string()
    .min(1, VALIDATION_MESSAGES.EMAIL_REQUIRED)
    .email(VALIDATION_MESSAGES.EMAIL_INVALID),

  password: z
    .string()
    .min(1, VALIDATION_MESSAGES.PASSWORD_REQUIRED)
    .min(6, VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH),
});

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, VALIDATION_MESSAGES.EMAIL_REQUIRED)
    .email(VALIDATION_MESSAGES.EMAIL_INVALID),

  password: z
    .string()
    .min(1, VALIDATION_MESSAGES.PASSWORD_REQUIRED)
    .min(6, VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH),
});
