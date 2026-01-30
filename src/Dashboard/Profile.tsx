import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Accessibility,
  Globe,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { profileSchema , type ProfileFormValues} from "../../profileSchema";
import InputField from "@/components/dashboard/InputField";
import TextAreaField from "@/components/dashboard/TextAreaField";

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data : ProfileFormValues) => {
    console.log("VALID DATA ✅", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[991px] mx-auto my-5 flex flex-col items-end gap-6"
    >
      <h1 className="font-bold text-[20px]">معلومات حسابك</h1>
      <p className="text-[#6F675F] text-[14px] font-medium">هذه معلومات أساسية عن حسابك</p>
      <div className="w-[319px] h-[117px] flex justify-between items-center gap-2">
        <Button variant="default" className="w-[81px] h-[48px] bg-[#FFFFFF] shadow-xl rounded-[24px] text-[15px] text-[#2F2A25] font-medium">حذف</Button>
        <Button type="submit" variant="default" className="w-[81px] h-[48px] bg-[#FFFFFF] shadow-xl rounded-[24px] text-[15px] text-[#2F2A25] font-medium">تحديث</Button>
        <div className="bg-linear-to-r flex justify-end items-start from-[#FE942A] to-[#FFFFFF]/30 rounded-full w-[117px] h-[117px]">
           <img src="/user.png" className="w-[97%] h-[97%] rounded-full"/>
        </div>
      </div>

      <div className="flex w-full justify-between">
        <InputField
          label="اسم الحساب"
          Icon={Accessibility}
          placeholder="gpol"
          register={register("username")}
          error={errors.username?.message}
        />

        <InputField
          label="الاسم الكامل"
          Icon={User}
          placeholder="الاسم الكامل"
          register={register("fullName")}
          error={errors.fullName?.message}
        />
      </div>

      <div className="flex w-full justify-between">
        <InputField
          label="البريد الإلكتروني"
          Icon={MessageSquare}
          placeholder="example@email.com"
          register={register("email")}
          error={errors.email?.message}
        />

        <InputField
          label="رقم الهاتف"
          Icon={Phone}
          placeholder="05xxxxxxxx"
          register={register("phone")}
          error={errors.phone?.message}
        />
      </div>

      <TextAreaField
        label="العنوان"
        Icon={Globe}
        placeholder="أدخل العنوان بالتفصيل"
        register={register("address")}
        error={errors.address?.message}
      />

      <Button
        variant="default"
        className="w-[204px] h-[48px] rounded-[24px] shadow-xl bg-white text-[14px] text-[#2F2A25] font-medium"
      >
       إعادة تعيين كلمة المرور
      </Button>
    </form>
  );
}
