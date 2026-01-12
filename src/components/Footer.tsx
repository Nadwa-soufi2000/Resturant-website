//import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div className="w-full h-[383px] bg-[#2F2A25] flex flex-col justify-center items-center gap-6">
        <img src="/Herologo.png" alt="" className="w-[100px] h-[90px]"/>
        <p className="text-[20px] font-medium text-[#F9FAFB]">نقدم لك تجربة طعام مميزة بنكهة دافئة وجودة عالية</p>
        <div className="flex justify-center items-center gap-2 w-[147px] h-[30px]">
            <div className="w-[30px] h-[30px] bg-[#FE942A] flex justify-center items-center rounded-[15px]"><img src="/face.png" alt="" className=" text-[15px]"/></div>
            <div className="w-[30px] h-[30px] rounded-[15px] bg-[#FE942A] flex justify-center items-center "><img src="/insta.png" alt="" className="text-[15px]"/></div>
            <div className="w-[30px] h-[30px] rounded-[15px] bg-[#FE942A] flex justify-center items-center "><img src="/face.png" alt="" className="text-[15px]"/></div>
            <div className="w-[30px] h-[30px] rounded-[15px] bg-[#FE942A] flex justify-center items-center "><img src="/whatsapp.png" alt="" className="text-[15px]"/></div>
        </div>
        <div className="w-[528px] h-[36px] flex justify-between items-center">
            <p className="w-[123px] h-[36px] font-medium text-[18px] text-[#FFFFFF] rounded-[12px] border border-transparent  flex justify-center items-center">تواصل معنا</p>
            <p className="w-[123px] h-[36px] font-medium text-[18px] text-[#FFFFFF]  rounded-[12px] border border-transparent flex justify-center items-center font-medium text-[18px]">الأكثر طلباً</p>
            <p className="w-[123px] h-[36px] font-medium text-[18px] text-[#FFFFFF]  rounded-[12px] border border-transparent flex justify-center items-center  font-medium text-[18px]">الأصناف</p>
            <p className="w-[123px] h-[36px] font-medium text-[18px] text-[#FFFFFF]  rounded-[12px] border border-transparent flex justify-center items-center font-medium text-[18px]">القائمة</p>
        </div>
        <span className="w-[1204px] border-2 border-[#F9FAFB]/40"></span>
        <p className="text-[14px] font-medium text-[#F9FAFB]">اسم المطعم - جميع الحقوق محفوظة 2025</p>
    </div>
  )
}
