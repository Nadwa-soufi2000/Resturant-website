import { Eye, Trash2 } from "lucide-react"
import { Button } from "../ui/button"
import { Table, 
         TableBody, 
         TableCell, 
         TableHead, 
         TableHeader, 
         TableRow 
       } from "../ui/table"

export default function TableComponent() {
  
  const data = [1,2,3,4,5,6,7]
  const styleCell = "border-y border-[#666666]/16 first:border-l last:border-r first:rounded-l-lg last:rounded-r-lg"
  const responsiveCell = "flex xl:table-cell justify-between xl:justify-start items-center text-right before:content-[attr(data-label)] before:text-[12px] before:text-[#6F675F] before:font-medium before:xl:hidden"

  return (
    <div className="w-[97%] mx-auto">
      <Table className="w-full my-[20px] border-separate border-spacing-y-3">
        <TableHeader className="hidden xl:table-header-group">
          <TableRow className={`h-[46px] bg-[#F9FAFB]`}>
            <TableHead className={`text-[14px] text-[#2F2A25] ${styleCell} font-medium`}>أزرار التحكم</TableHead>
            <TableHead className={`text-[14px] text-[#2F2A25] ${styleCell} font-medium`}>صنف الطلب</TableHead>
            <TableHead className={`text-[14px] text-[#2F2A25] ${styleCell} font-medium`}>تفاصيل الطلب</TableHead>
            <TableHead className={`text-[14px] text-[#2F2A25] ${styleCell} font-medium`}>صورة الطلب</TableHead>
            <TableHead className={`text-[14px] text-[#2F2A25] ${styleCell} font-medium`}>السعر الكلي</TableHead>
            <TableHead className={`text-[14px] text-[#2F2A25] ${styleCell} font-medium`}>اسم العميل ونوعه</TableHead>
            <TableHead className={`text-[14px] text-[#2F2A25] ${styleCell} font-medium`}>معلومات الطلب</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {data.map((_, index) => (
            <TableRow
              key={index}
              className="xl:table-row flex flex-col gap-3 xl:h-[80px] h-auto py-[16px]  border border-[#666666]/16 rounded-[8px] bg-white"
            >
              <TableCell 
                data-label="أزرار تحكم"
                className={`text-right ${responsiveCell} ${styleCell}`}
              >
                <div className="flex gap-1">
                  <Button className="bg-white border">
                    <Trash2 className="w-4 h-4 text-[#6F675F]" />
                  </Button>
                  <Button className="bg-white border">
                    <Eye className="w-4 h-4 text-[#6F675F]" />
                  </Button>
                </div>
              </TableCell>

               <TableCell 
                 data-label="صنف الطلب"
                 className={`text-right ${responsiveCell} ${styleCell}`}
               >
                <div className="flex flex-col items-end">
                  <h2 className="text-[14px] font-bold text-[#2F2A25]">الأطباق الرئيسية</h2>
                  <p className="text-[14px] text-[#6F675F]">مع السلطات</p>
                </div>
              </TableCell>

              <TableCell 
                data-label="تفاصيل الطلب"
                className={`text-right ${responsiveCell} ${styleCell}`}
              >
                <div className="flex flex-col items-end">
                  <h2 className="text-[14px] font-bold text-[#2F2A25]">مندي لحم</h2>
                  <p className="text-[14px] text-[#6F675F]">مع سلطة روسية</p>
                </div>
              </TableCell>

              <TableCell 
                data-label="صورة الطلب"
                className={`text-right ${responsiveCell} ${styleCell}`}
              >
                <img src="/food.jpg" className="w-[31px] h-[31px] rounded-[8px]" />
              </TableCell>

               <TableCell 
                 data-label="السعر الكلي"
                 className={`${styleCell} ${responsiveCell}`}
               >
                <p className="text-[14px] font-bold text-[#2F2A25] text-center">40$</p>
              </TableCell>

              <TableCell 
                data-label="اسم العميل"
                className={` ${responsiveCell} ${styleCell}`}
              >
                <div className="w-[149px] h-[40px] flex justify-center items-center gap-1">
                  <div className="flex flex-col items-end">
                    <h2 className="text-[14px] text-[#2F2A25]">اسم العميل</h2>
                    <p className="text-[10px] text-[#6F675F]">زبون خارجي</p>
                  </div>
                  <img src="/user.png" className="w-[40px] h-[40px] rounded-full" />
                </div>
              </TableCell>


              <TableCell
                data-label="معلومات الطلب" 
                className={`${responsiveCell} ${styleCell}`}
              >
                <div>
                  <h2 className="text-[14px] font-bold text-[#2F2A25]">#ORD-1012</h2>
                  <p className="text-[14px] text-[#6F675F]">منذ 3 دقائق</p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}