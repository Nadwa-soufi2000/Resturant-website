import { Bell,Menu,Search} from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
      <nav className="w-full h-[80px] border-b-[1px] shadow-xl border-b-[#666666]/16 bg-[#FFFFFF] flex xl:justify-around justify-center xl:gap-0 gap-2 items-center">
        <div className=" w-[60%] sm:w-[40%] xl:w-[1050px] h-[40px] flex justify-between items-center">
            <div className=" w-auto xl:w-[330px] h-[40px] flex justify-between items-center">
              <Link to="/dashboard/profile" className="w-[122px] h-[49px] hover:bg-[#666666]/16 rounded-[10px] flex justify-center items-center gap-1">
                  <div className="flex flex-col items-end justify-center">
                    <h2 className="text-[14px] text-[#2F2A25] font-normal">اسم الأدمن</h2>
                    <p className="text-[10px] text-[#6F675F] font-normal">admin</p>
                  </div>
                  <img src="/user.png" alt="" className="w-[40px] h-[40px] rounded-full"/>
              </Link>
              <div className="w-[197px] h-[30px] hidden xl:flex justify-between items-center">
                <div className="flex flex-col items-end justify-center w-[173px] h-[30px]">
                    <h2 className="text-[14px] text-[#2F2A25] font-normal">حالة المطعم</h2>
                    <p className="text-[10px] text-[#6F675F] font-normal">المطعم مفتوح الأن ويستقبل الطلبات</p>
                </div>
                <span className="w-[16px] h-[16px] rounded-full bg-[#4CAF50]"></span>
              </div>
            </div>
            <div className="w-auto xl:w-[427px] h-[38px] flex justify-center items-center gap-1">
              <div className="w-[388px] h-[38px] hidden xl:flex justify-center items-center gap-2 border-1 border-[#666666]/16 rounded-[6px]">
               <input type="text" dir="rtl" className="text-[#6F675F] text-[14px] font-normal w-[80%] h-full  outline-none" placeholder="بحث عن طلب\عميل\طبق"/>
                <Search className="w-[16px] h-[16px] text-[#6F675F] "/>
              </div>
              <Link to="/dashboard/notefications" className="bg-[#666666]/16 w-[40px] h-[40px] rounded-[40px] flex justify-center items-center hover:bg-accent"><Bell className="w-[24px] h-[24px] text-[#000000]"/></Link>
            </div>
        </div>
         <SidebarTrigger className="">
          <Menu className="w-[25px] h-[25px] text-[#2F2A25]"/>
        </SidebarTrigger>
      </nav>
  )
}