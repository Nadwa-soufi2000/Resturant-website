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
      className="w-full xl:w-[991px] mx-auto my-5 sm:pl-0 pl-1 pr-1 md:pr-10 xl:pr-0 flex flex-col items-end gap-4 sm:gap-5 md:gap-6"
    >
      <h1 className="font-bold text-[18px] sm:text-[19px] md:text-[20px]">معلومات حسابك</h1>
      <p className="text-[#6F675F] text-[12px] sm:text-[13px] md:text-[14px] font-medium">هذه معلومات أساسية عن حسابك</p>
      <div className="w-[280px] md:w-[319px] h-[100px] sm:h-[110px] md:h-[117px] flex justify-between items-center gap-2">
        <Button variant="default" className="w-[70px] sm:w-[75px] md:w-[81px] h-[40px] sm:h-[44px] md:h-[48px] bg-[#FFFFFF] shadow-xl rounded-[20px] sm:rounded-[22px] md:rounded-[24px] text-[12px] sm:text-[14px] md:text-[15px] text-[#2F2A25] font-medium">حذف</Button>
        <Button type="submit" variant="default" className="w-[70px] sm:w-[75px] md:w-[81px] h-[40px] sm:h-[44px] md:h-[48px] bg-[#FFFFFF] shadow-xl rounded-[20px] sm:rounded-[22px] md:rounded-[24px] text-[12px] sm:text-[14px] md:text-[15px] text-[#2F2A25] font-medium">تحديث</Button>
        <div className="bg-linear-to-r flex justify-end items-start from-[#FE942A] to-[#FFFFFF]/30 rounded-full w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] md:w-[117px] md:h-[117px]">
           <img src="/user.png" className="w-[97%] h-[97%] rounded-full" alt="User profile"/>
        </div>
      </div>

      <div className="flex flex-col sm:flex-col xl:flex-row w-full justify-between items-end xl:items-center gap-3 sm:gap-4 md:gap-0">
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

      <div className="flex flex-col sm:flex-col xl:flex-row w-full justify-between items-end xl:items-center gap-3 sm:gap-4 md:gap-0">
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
        className="w-[170px] sm:w-[185px] md:w-[204px] h-[40px] sm:h-[44px] md:h-[48px] rounded-[20px] sm:rounded-[22px] md:rounded-[24px] shadow-xl bg-white text-[12px] sm:text-[13px] md:text-[14px] text-[#2F2A25] font-medium"
      >
       إعادة تعيين كلمة المرور
      </Button>
    </form>
  );
}