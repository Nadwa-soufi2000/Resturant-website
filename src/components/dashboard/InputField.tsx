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
    <div className="flex flex-col items-end w-[485.5px] gap-1">
      <div className="flex justify-end items-center gap-1">
        <h2 className="text-[14px] font-medium text-[#2F2A25]">{label}</h2>
        <Icon className="w-[17px] h-[17px]" />
      </div>

      <input
        dir="rtl"
        type={type}
        placeholder={placeholder}
        {...register}
        className={`w-full h-[39px] p-3 text-[14px] outline-none bg-[#F9FAFB] 
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