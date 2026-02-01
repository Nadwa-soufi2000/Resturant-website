import TableComponent from "@/components/dashboard/TableComponent";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function OrdersControlPanel() {
  return (
    <div className=" flex flex-col justify-center items-center mx-auto xl:w-[991px] w-[96%] sm:my-[40px] my-[70px]">
      <div className="xl:w-[991px] w-[95%] h-[48px] flex sm:flex-row flex-col-reverse justify-between sm:items-center items-end">
        <div className="flex justify-center items-center gap-3 w-auto xl:w-[298.58px] h-[48px]">
          <Button
            variant="default"
            className="xl:w-[141px] w-[110px] h-[48px] flex items-center justify-center rounded-3xl gap-2 hover:bg-accent bg-white shadow-xl mt-auto"
          >
            <img src="/multi.png" className=""/>
            <span className="xl:text-[16px] text-[13px] font-medium text-[#2F2A25]">فلترة حسب</span>
          </Button>

           <Button
            variant="default"
            className="xl:w-[149px] w-[120px] h-[48px] flex items-center justify-center rounded-3xl gap-2 hover:bg-accent bg-white shadow-xl mt-auto"
          >
            <img src="/upload.png" className=""/>
            <span className="xl:text-[16px] text-[13px] font-medium text-[#2F2A25]">تنزيل الفاتورة</span>
          </Button>
        </div>
        <h1 className="text-[20px] font-bold text-[#2F2A25]">إدارة الطلبات</h1>
      </div>
       <ScrollArea className="h-[750px] xl:w-[991px] w-[97%] mx-auto">
          <TableComponent/>
       </ScrollArea>
    </div>
  )
}
