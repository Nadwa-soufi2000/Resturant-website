import { BookMarked, MoreVertical, ShoppingCart } from "lucide-react"
import { Table, 
         TableBody, 
         TableCell,  
         TableRow 
       } from "../ui/table"

export default function NotifecationTable() {

  const data = [1,2,3,4,5,6,7]
  const styleCell = "border-y border-[#666666]/16 first:border-l last:border-r first:rounded-l-lg last:rounded-r-lg"
  
  return (
    <div className="w-[991px] mx-auto">
      <Table className="w-full my-[20px] border-separate border-spacing-y-3">
        <TableBody className="">
          {data.map((_, index) => (
            <TableRow
              key={index}
              className="h-[80px] w-full py-[16px] border border-[#666666]/16 rounded-[8px] bg-white"
            > 
              <TableCell align="left" className={` ${styleCell}`}>
               <div className="w-[153px] h-[24px] flex justify-between items-center">
                  <MoreVertical className="w-[24px] h-[24px]" />
                  <BookMarked className="w-[24px] h-[24px]" />
                  <p className="font-medium text-[14px] text-[#2F2A25]">منذ 3 دقائق</p>
               </div>
              </TableCell>

               <TableCell align="right" className={` ${styleCell}`}>
                  <div className="w-[520px] h-[40px] flex justify-between items-center">
                     <p className="text-[14px] text-[#6F675F] font-medium">عميل قام بإرسال طلب جديد ويحتاج موافقة</p>
                     <h2 className="font-medium text-[20px] text-[#2F2A25]">طلب جديد ORD-1021#</h2>
                     <div className="w-[44px] h-[44px] rounded-full bg-[#f5afaf] flex justify-center items-center">
                        <ShoppingCart className="w-[24px] h-[24px] text-[#f53e37]"/>
                     </div>
                  </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
