import type { ProductData } from "@/types/types-data";
import { Card, CardContent } from "../ui/card";

export default function ProductCard({img , name , price} : ProductData) {
  
  return (
    <Card className="w-full sm:w-[205px] h-[260px] rounded-[20px]  transition-all duration-300 hover:scale-[1.05]  hover:shadow-xl bg-[#FFFFFF] flex flex-col justify-center items-center gap-3">
       <CardContent className="mx-auto">
            <img
              src={img || "/placeholder.svg"}
              alt=""
              className="w-[120px] h-[120px] mx-auto"
            />
            <div className="space-y-2 pt-2">
               <h1 className="font-medium text-[22px] text-center text-[#000000]">{name}</h1>
               <p className="font-medium text-[20px] text-center text-[#A3A3A3]" dir="rtl">
                  {price}
               </p>
            </div>
       </CardContent>
    </Card>
  )
}
