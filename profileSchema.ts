import { z } from "zod";

export const profileSchema = z.object({
  username: z.string().min(3, "اسم الحساب قصير جدًا"),
  fullName: z.string().min(3, "الاسم الكامل مطلوب"),
  email: z.string().email("البريد الإلكتروني غير صالح"),
  phone: z
    .string()
    .min(8, "رقم الهاتف غير صالح")
    .regex(/^[0-9]+$/, "رقم الهاتف يجب أن يحتوي أرقام فقط"),
  address: z.string().min(10, "العنوان قصير جدًا"),
});

export type ProfileFormValues = z.infer<typeof profileSchema>