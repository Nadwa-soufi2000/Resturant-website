import NotifecationTable from "@/components/dashboard/NotifecationTable";
import { Button } from "@/components/ui/button";
import { CheckCheck, Trash2 } from "lucide-react";

export default function Notifications() {
  return (
    <div className="w-full max-w-[991px] mx-auto my-5 px-4 flex flex-col gap-6">
      {/* Header */}
      <div className="w-full flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-4">
        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant="default"
            className="w-full sm:w-[128px] h-12 flex items-center justify-center rounded-[24px] gap-2 bg-white hover:bg-accent shadow-xl"
          >
            <Trash2 className="h-4 w-4 text-[#2F2A25]" />
            <span className="text-[15px] font-medium text-[#2F2A25]">
              حذف الكل
            </span>
          </Button>

          <Button
            variant="default"
            className="w-full sm:w-[165px] h-12 flex items-center justify-center rounded-[24px] gap-2 bg-white hover:bg-accent shadow-xl"
          >
            <CheckCheck className="h-4 w-4 text-[#2F2A25]" />
            <span className="text-[15px] font-medium text-[#2F2A25]">
              تحديد الكل كمقروء
            </span>
          </Button>
        </div>

        {/* Title */}
        <h1 className="text-[20px] font-bold text-[#2F2A25] text-right">
          الإشعارات
        </h1>
      </div>

      {/* Filter */}
      <div className="w-full h-[41px] flex justify-center items-center rounded-[20px] bg-white border border-[#666666]/16">
        <ul className="flex flex-wrap sm:flex-nowrap justify-between items-center w-full max-w-[796px] px-3 text-center gap-2 sm:gap-0">
          <li className="flex-1 font-medium sm:text-[14px] text-[12px] text-[#A39A91]">
            جميع الإشعارات
          </li>
          <li className="flex-1 font-medium sm:text-[14px] text-[12px] text-[#A39A91]">
            الكباتن
          </li>
          <li className="flex-1 font-medium sm:text-[14px] text-[12px] text-[#A39A91]">
            الطلبات
          </li>
          <li className="flex-1 font-medium sm:text-[14px] text-[12px] text-[#A39A91]">
            النظام
          </li>
        </ul>
      </div>

      {/* Table */}
      <NotifecationTable />
    </div>
  );
}