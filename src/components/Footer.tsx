//import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div className="w-full h-[383px] bg-[#2F2A25] flex flex-col justify-center items-center gap-6">
        <img src="/Herologo.png" alt="" className="w-[123px] h-[93px]"/>
        <p className="text-[20px] font-medium text-[#F9FAFB]">نقدم لك تجربة طعام مميزة بنكهة دافئة وجودة عالية</p>
        <div className="flex justify-center items-center gap-2 w-[147px] h-[30px]">
            <div className="w-[30px] h-[30px] bg-[#FE942A] flex justify-center items-center rounded-[15px]"><img src="/face.png" alt="" className=" text-[15px]"/></div>
            <div className="w-[30px] h-[30px] rounded-[15px] bg-[#FE942A] flex justify-center items-center "><img src="/insta.png" alt="" className="text-[15px]"/></div>
            <div className="w-[30px] h-[30px] rounded-[15px] bg-[#FE942A] flex justify-center items-center "><img src="/face.png" alt="" className="text-[15px]"/></div>
            <div className="w-[30px] h-[30px] rounded-[15px] bg-[#FE942A] flex justify-center items-center "><img src="/whatsapp.png" alt="" className="text-[15px]"/></div>
        </div>
        <div className="w-[528px] h-[36px] flex justify-between items-center">
            <div className="bg-linear-to-r from-[#FFFFFF]/30 to-[#2F2A25] rounded-[12px] pl-[2px] pb-[2px]"><p className="w-[123px] h-[36px] bg-[#2F2A25] font-medium text-[18px] text-[#FFFFFF] rounded-[12px] flex justify-center items-center">تواصل معنا</p></div>
            <div className="bg-linear-to-r from-[#FFFFFF]/30 to-[#2F2A25] rounded-[12px] pl-[2px] pb-[2px]"><p className="w-[123px] h-[36px] font-medium text-[18px] bg-[#2F2A25] rounded-[12px] text-[#FFFFFF]  flex justify-center items-center font-medium text-[18px]">الأكثر طلباً</p></div>
            <div className="bg-linear-to-r from-[#FFFFFF]/30 to-[#2F2A25] rounded-[12px] pl-[2px] pb-[2px]"><p className="w-[123px] h-[36px] font-medium text-[18px] text-[#FFFFFF] flex justify-center items-center bg-[#2F2A25] rounded-[12px]  font-medium text-[18px]">الأصناف</p></div>
            <div className="bg-linear-to-r from-[#FFFFFF]/30 to-[#2F2A25] rounded-[12px] pl-[2px] pb-[2px]"><p className="w-[123px] h-[36px] font-medium text-[18px] text-[#FFFFFF]  flex justify-center items-center bg-[#2F2A25] rounded-[12px] font-medium text-[18px]">القائمة</p></div>
        </div>
        <span className="w-[1204px] border-2 border-[#F9FAFB]/40"></span>
        <p className="text-[14px] font-medium text-[#F9FAFB]">اسم المطعم - جميع الحقوق محفوظة 2025</p>
    </div>
  )
}
