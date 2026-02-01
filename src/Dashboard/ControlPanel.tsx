import { ChartArea } from "@/components/dashboard/AreaChart"
import { ChartPie } from "@/components/dashboard/PieChart"
import Statistics from "@/components/dashboard/Statistics"
import TableComponent from "@/components/dashboard/TableComponent"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronDown } from "lucide-react"

export default function ControlPanel() {

  const statisticsArray = [
    {
      logoimg:"/LogoGreen.png",
      arrowimg:"/ArrowGreen.png",
      color1:"text-[#3E7C59]" ,
      color2:"text-[#27AE60]",
      color3:"text-[#1E7F4F]",
      bgColor:"bg-[#EAF6F0]",
      text:"الإيرادات",
      value:"7,203",
      rating:"+11.09%"
    }
    ,
    {
      logoimg:"/LogoYellow.png",
      arrowimg:"/ArrowYellow.png",
      color1:"text-[#7A5A2E]" ,
      color2:"text-[#D4A373]",
      color3:"text-[#8D6E00]",
      bgColor:"bg-[#FFF8E1]",
      text:"قيد التحضير",
      value:"205",
      rating:"+11.09%"
    }
    ,
    {
      logoimg:"/LogoOrange.png",
      arrowimg:"/ArrowOrange.png",
      color1:"text-[#8A4B12]" ,
      color2:"text-[#F57C00]",
      color3:"text-[#CA5A00]",
      bgColor:"bg-[#FFF3E6]",
      text:"الطلبات",
      value:"30",
      rating:"+11.09%"
    }
    ,
    {
      logoimg: "/LogoBlue.png",
      arrowimg:"/ArrowBlue.png",
      color1:"text-[#4F46E5]" ,
      color2:"text-[#4338CA]",
      color3:"text-[#3730A3]",
      bgColor:"bg-[#EEF2FF]",
      text:"الإحصائيات",
      value:"7,23",
      rating:"+11.09%"
    }
  ]

  return (
    <div className="xl:w-[991px] sm:w-[94%] w-full mx-auto my-[40px] overflow-x-hidden">
        <div className="xl:w-full w-[97%] xl:px-0 px-4 mx-auto flex justify-between items-center">
          <DropdownMenu>
           <DropdownMenuTrigger asChild>
             <Button variant="default" className="w-[68.7px] h-[37px] flex items-start justify-center bg-[#6F675F]/16 hover:scale-[1.09] duration-300 ease-in-out">
               <p className="text-[14px] font-normal text-[#2F2A25]">اليوم</p>
               <ChevronDown className="w-[5.89px] h-[11.7px] text-[#2F2A25] relative top-[4px]" />
             </Button>
           </DropdownMenuTrigger>
           <DropdownMenuContent align="start">
             <DropdownMenuGroup>
               <DropdownMenuLabel>اليوم</DropdownMenuLabel>
               <DropdownMenuItem>الشهر</DropdownMenuItem>
               <DropdownMenuItem>السنة</DropdownMenuItem>
             </DropdownMenuGroup>
           </DropdownMenuContent>
         </DropdownMenu>
         <h1 className="font-bold text-[20px] text-[#2F2A25]">إحصائيات عامة</h1>
        </div>
        <div className="xl:w-[991px] sm:w-[90%] w-[88%] mx-auto xl:gap-0 gap-2 grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:flex justify-between items-center mt-10">  
          {statisticsArray.map((item , index) => {
            return(
              <Statistics
                key={index}
                logoimg={item.logoimg}
                arrowimg={item.arrowimg}
                color1={item.color1}
                color2={item.color2}
                color3={item.color3}
                bgColor={item.bgColor}
                text={item.text}
                value={item.value}
                rating={item.rating}
              />    
            )
          })
          }     
        </div>
        <div className="xl:w-[991px] sm:w-[90%] w-[88%] mx-auto xl:gap-0 gap-2 xl:flex grid grid-cols-1  justify-between items-center my-[40px]">
          <ChartArea/>
          <ChartPie/>
        </div>
        {/*<div className="w-full xl:w-[991px] h-[48px] flex justify-between items-center">
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
            <h1 className="text-[20px] font-bold text-[#2F2A25]">الطلبات</h1>
         </div>*/}
           <ScrollArea className="h-[450px] xl:w-[991px] w-[97%] mx-auto">
             <TableComponent />
             {/*<ScrollBar orientation="horizontal"/>*/}
           </ScrollArea>  
    </div>
  )
}
