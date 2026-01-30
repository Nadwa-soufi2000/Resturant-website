import TableComponent from "@/components/dashboard/TableComponent";
import { Button } from "@/components/ui/button";

export default function OrdersControlPanel() {
  return (
    <div className="mx-auto w-[991px] my-[40px]">
      <div className="w-[991px] h-[48px] flex justify-between items-center">
        <div className="flex justify-center items-center gap-3 w-[298.58px] h-[48px]">
          <Button
            variant="default"
            className="w-[141px] h-[48px] flex items-center justify-center rounded-3xl gap-2 hover:bg-accent bg-white shadow-xl mt-auto"
          >
            <img src="/multi.png" className=""/>
            <span className="text-[16px] font-medium text-[#2F2A25]">فلترة حسب</span>
          </Button>

           <Button
            variant="default"
            className="w-[149px] h-[48px] flex items-center justify-center rounded-3xl gap-2 hover:bg-accent bg-white shadow-xl mt-auto"
          >
            <img src="/upload.png" className=""/>
            <span className="text-[16px] font-medium text-[#2F2A25]">تنزيل الفاتورة</span>
          </Button>
        </div>
        <h1 className="text-[20px] font-bold text-[#2F2A25]">إدارة الطلبات</h1>
      </div>
      <TableComponent/>
    </div>
  )
}
