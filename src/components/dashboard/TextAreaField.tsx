import type { TextAreaFieldProps } from "@/types/types-data";

export  default function TextAreaField({ 
    label, 
    Icon, 
    placeholder, 
    register, 
    error 
}: TextAreaFieldProps) {
  
  return (
    <div className="flex flex-col items-end w-full gap-1">
      <div className="flex justify-end items-center gap-1">
        <h2 className="text-[14px] font-medium text-[#2F2A25]">{label}</h2>
        <Icon className="w-[17px] h-[17px]" />
      </div>

      <textarea
        dir="rtl"
        placeholder={placeholder}
        {...register}
        className={`w-full h-[111px] p-3 outline-none bg-[#F9FAFB] 
          border ${error ? "border-red-500" : "border-[#666666]/16"}`}
      />

      {error && (
        <span className="text-red-500 text-[12px] self-end">
          {error}
        </span>
      )}
    </div>
  );
}