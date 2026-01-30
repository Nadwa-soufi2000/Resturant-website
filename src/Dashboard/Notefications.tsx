import NotifecationTable from "@/components/dashboard/NotifecationTable";
import { Button } from "@/components/ui/button";
import { CheckCheck, Trash2 } from "lucide-react";

export default function Notefications() {
  return (
    
    <div className="w-[991px] mx-auto my-[20px] flex flex-col gap-6">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-between items-center gap-2">
          <Button
            variant="default"
            className="w-[128px] h-12  flex items-center justify-center rounded-[24px] gap-2 bg-[#FFFFFF] mt-auto hover:bg-accent shadow-xl"
          >
           <Trash2 className="h-4 w-4 text-[#2F2A25]" />
           <span className="text-[15px] font-medium text-[#2F2A25]">حذف الكل</span>
          </Button>

          <Button
            variant="default"
            className="w-[165px] border-[#2F2A25] h-12 flex items-center justify-center rounded-[24px] gap-2 hover:bg-accent bg-[#FFFFFF] mt-auto shadow-xl"
          >
            <CheckCheck className="h-4 w-4 text-[#2F2A25]" />
            <span className="text-[15px] font-medium text-[#2F2A25]">تحديد الكل كمقروء</span>
          </Button>
        </div>
        <h1 className="text-[20px] font-bold text-[#2F2A25]">الإشعارات</h1>
      </div>

      {/* Filter */}
      <div className="w-[991px] h-[41px] flex justify-center items-center rounded-[20px] bg-[#FFFFFF] border-1 border-[#666666]/16 relative top-[20px]">
        <ul className="flex justify-between items-center w-[796px] h-[17px]">
          <li className="font-medium text-[14px] text-[#A39A91]">جميع الإشعارات</li>
          <li className="font-medium text-[14px] text-[#A39A91]">الكباتن</li>
          <li className="font-medium text-[14px] text-[#A39A91]">الطلبات</li>
          <li className="font-medium text-[14px] text-[#A39A91]">النظام</li>
        </ul>
      </div>
      {/***/}

      <NotifecationTable />
    </div>
  )
}
