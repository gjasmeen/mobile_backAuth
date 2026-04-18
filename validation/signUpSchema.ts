import { z } from "zod";

export const signUpSchema = z
  .object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm your password"),
  })
  .refine(
    (data) => data.password.trim() === data.confirmPassword.trim(),
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

export type SignUpFormData = z.infer<typeof signUpSchema>;