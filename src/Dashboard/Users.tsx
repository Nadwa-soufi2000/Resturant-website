import AddUser from "@/components/dashboard/AddUser";
import UsersTable from "@/components/dashboard/UsersTable";
import { Search } from "lucide-react";

export default function Users() {
  return (
    <div className="w-[1065px] mx-auto my-[20px] flex flex-col gap-6">
      <div className="flex justify-between items-center w-full h-[50px]">
        <div className="w-[396px] h-full flex justify-between items-center">
           <AddUser/>
           <div className="w-[261px] h-[50px] hidden xl:flex justify-center items-center gap-2 border-1 border-[#666666]/16 rounded-[6px]">
             <input type="text" dir="rtl" className="text-[#939393] text-[20px] font-normal w-[80%] h-full  outline-none" placeholder="بحث"/>
             <Search className="w-[16px] h-[16px] text-[#6F675F] "/>
           </div>
        </div>
        <h1 className="text-[24px] text-[#474747] font-medium">المستخدمين</h1>
      </div>
      <UsersTable />
    </div>
  )
}
