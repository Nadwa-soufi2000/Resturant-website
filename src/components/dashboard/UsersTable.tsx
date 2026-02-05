import { Edit2, Trash2 } from "lucide-react"
import { Button } from "../ui/button"
import { Table, 
         TableBody,
         TableCell,
         TableHead, 
         TableHeader, 
         TableRow 
        } from "../ui/table"

export default function UsersTable() {
  const data = [1,2,3,4,5,6,7]
  const styleCell = "border-y border-[#666666]/16 first:border-l last:border-r first:rounded-l-lg last:rounded-r-lg"
  const responsiveCell = "flex xl:table-cell justify-between xl:justify-start items-center text-right before:content-[attr(data-label)] before:text-[12px] before:text-[#6F675F] before:font-medium before:xl:hidden"

  return (
    <div className="w-full mx-auto">
      <Table className="w-full my-[20px] border-separate border-spacing-y-3">
        <TableHeader  className="hidden xl:table-header-group">
          <TableRow className={`h-[46px] w-[988px] mx-auto bg-[#F9FAFB]`}>
            <TableHead className={`text-[14px] text-[#2F2A25] ${styleCell} font-medium`}>الإجراءات</TableHead>
            <TableHead className={`text-[14px] text-[#2F2A25] ${styleCell} font-medium`}>رقم الهاتف</TableHead>
            <TableHead className={`text-[14px] text-[#2F2A25] ${styleCell} font-medium`}>البريد الإلكتروني</TableHead>
            <TableHead className={`text-[14px] text-[#2F2A25] ${styleCell} font-medium`}>كلمة المرور</TableHead>
            <TableHead className={`text-[14px] text-[#2F2A25] ${styleCell} font-medium`}>الاسم الكامل</TableHead>
            <TableHead className={`text-[14px] text-[#2F2A25] ${styleCell} font-medium`}>الصورة</TableHead>
            <TableHead className={`text-[14px] text-[#2F2A25] ${styleCell} font-medium`}>رقم المستخدم</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {data.map((_, index) => (
            <TableRow
              key={index}
              className="xl:table-row flex flex-col gap-3 xl:h-[80px] h-auto py-[16px]  border border-[#666666]/16 rounded-[8px] bg-white"
            >
              <TableCell 
                data-label="الإجراءات"
                className={`text-right ${responsiveCell} ${styleCell}`}
              >
                <div className="flex gap-1">
                  <Button className="">
                    <Trash2 className="w-6 h-6 text-[#6F675F]" />
                  </Button>
                  <Button className="">
                    <Edit2 className="w-6 h-6 text-[#6F675F]" />
                  </Button>
                </div>
              </TableCell>

               <TableCell 
                 data-label="رقم الهاتف"
                 className={`text-right ${responsiveCell} ${styleCell}`}
               >
                 <p className="text-[14px] text-[#6F675F]">1234450968</p>
              </TableCell>

              <TableCell 
                data-label="بريد الإلكتروني"
                className={`text-right ${responsiveCell} ${styleCell}`}
              >
                <h2 className="text-[14px] font-normal text-[#000000]">example@gmail.com</h2>
              </TableCell>

              <TableCell 
                data-label="كلمة المرور"
                className={`text-right ${responsiveCell} ${styleCell}`}
              >
                <p className="text-[14px] font-normal text-[#000000]">........</p>
              </TableCell>

               <TableCell 
                 data-label="الاسم الكامل"
                 className={`${styleCell} ${responsiveCell}`}
               >
                <p className="text-[14px] font-normal text-[#000000]">أحمد سالم</p>
              </TableCell>

              <TableCell 
                data-label="الصورة"
                className={` ${responsiveCell} ${styleCell}`}
              >
                <img src="/user.png" className="w-[43px] h-[40px] rounded-full" />
              </TableCell>


              <TableCell
                data-label="رقم المستخدم" 
                className={`${responsiveCell} ${styleCell}`}
              >
                <h2 className="text-[14px] font-normal text-[#000000]">#001</h2>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
