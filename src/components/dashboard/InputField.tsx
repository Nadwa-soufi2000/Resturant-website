import type { InputFieldProps } from "@/types/types-data";

 export default function InputField({ 
    label, 
    Icon, 
    placeholder, 
    register, 
    error, 
    type = "text"
 } :InputFieldProps) {
    
  return (
    <div className="flex flex-col items-end w-full sm:w-[400px] md:w-[450px] lg:w-[700px] xl:w-[485.5px] gap-1">
      <div className="flex justify-end items-center gap-1">
        <h2 className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-[#2F2A25]">{label}</h2>
        <Icon className="w-[15px] h-[15px] sm:w-[16px] sm:h-[16px] md:w-[17px] md:h-[17px]" />
      </div>

      <input
        dir="rtl"
        type={type}
        placeholder={placeholder}
        {...register}
        className={`w-full h-[36px] sm:h-[37px] md:h-[39px] p-2 sm:p-2.5 md:p-3 text-[12px] sm:text-[13px] md:text-[14px] outline-none bg-[#F9FAFB] 
          border ${error ? "border-red-500" : "border-[#666666]/16"}`}
      />

      {error && (
        <span className="text-red-500 text-[11px] sm:text-[11.5px] md:text-[12px] self-end">
          {error}
        </span>
      )}
    </div>
  );
}