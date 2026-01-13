import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="xl:w-full h-20 flex justify-center items-center shadow-[0_0_12px_0_rgba(0,0,0,0.15)] backdrop-blur-[30px] bg-[#F9FAFB]/90">
        <div className="flex justify-between items-center w-[1235.19px] h-18.25">
          <div className="flex justify-center items-center gap-2">
            <Button variant="default" className="bg-[#666666]/5 text-[#2F2A25] text-[15px] font-medium w-[142.19px] h-12 rounded-xl">تسجيل الدخول</Button>
            <div className="flex justify-center items-center gap-1">
              <div className="flex justify-center items-end flex-col">
                <p className="text-[14px] font-medium text-[#A5A5A5]">سلة المشتريات</p>
                <p className="text-[14px] font-normal text-[#6F675F]">3 طلبات</p>
              </div>
              <img src="/Icon.png" alt="" className="rounded-[40px] p-2 bg-white flex justify-center items-center w-[33px] h-[33px] text-[24px]" />
            </div>
          </div>
          <ul className="flex justify-between items-center w-99 h-5">
            <li className="font-normal text-[18px] text-[#6F675F]  hover:text-[#2F2A25] hover:font-bold duration-200 ease-in-out">تواصل معنا</li>
            <li className="font-normal text-[18px] text-[#6F675F] hover:text-[#2F2A25] hover:font-bold duration-200 ease-in-out">الأكثر طلباً</li>
            <li className="font-normal text-[18px] text-[#6F675F] hover:text-[#2F2A25] hover:font-bold duration-200 ease-in-out">الأصناف</li>
            <li className="font-normal text-[18px] text-[#6F675F] hover:text-[#2F2A25] hover:font-bold duration-200 ease-in-out">القائمة</li>
          </ul>
          <img src="/Navlogo.png" alt="" className="w-[96px] h-[73px]"/>
        </div>
    </div>
  )
}
