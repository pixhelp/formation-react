import { z } from "zod";

export const schema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(6)
      .max(100),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });