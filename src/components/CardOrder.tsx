import type { orderObject } from "@/types/types-data"
import { Star, Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

export default function CardOrder({ id, name, price, img }: orderObject) {
  return (
    <Card
      id={`${id}`}
      className="relative flex h-auto min-h-[180px] w-full flex-col-reverse items-center justify-end rounded-[8px] border border-[#666666]/16 bg-card p-4 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl sm:h-auto sm:flex-row  md:h-[229px] md:w-[727px] md:flex-row pr-2"
    >
      <div className="w-[40px] h-[40px] p-3 hover:bg-gray-200 rounded-[10px] absolute sm:bottom-[11%] bottom-[7%] left-[3%] flex justify-center items-center"><Trash2 className="w-[16px] h-[16px]"/></div>
      <div className="flex h-auto w-full flex-col items-center justify-end sm:gap-2 gap-6 sm:flex-row sm:items-center lg:h-[186px] lg:w-[617px]">
        {/* Product Details */}
        <div className="flex h-auto w-full flex-col items-center justify-start gap-3 pr-0 text-center sm:items-end sm:text-right md:h-[174px] md:w-[346px] md:gap-4 md:pr-2">
          <p className="text-[18px] font-medium text-[#2F2A25] sm:text-[20px] md:text-[24.61px]">{name}</p>

          {/* Rating */}
          <div className="flex h-[20px] w-auto items-center justify-center gap-2 sm:w-[192px] sm:justify-end">
            <p className="text-[14px] font-normal text-[#2F2A25] sm:text-[16px] md:text-[18px]">5/5</p>
            <div className="flex w-auto items-center gap-1 text-[#FFC400] sm:w-[100px]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
              ))}
            </div>
          </div>

          <p className="text-[16px] font-bold text-[#FE942A] sm:text-[18.46px]">{price}</p>

          {/* Quantity Controls */}
          <div className="flex h-10 w-full max-w-[237px] items-center justify-between">
            <div className="flex h-10 w-[140px] items-center justify-between border border-[#666666]/16 sm:w-[174px]">
              <Button
                variant="default"
                className="h-full rounded-none border-r border-muted-foreground/15 text-base font-normal text-orange-500 transition-colors duration-300 hover:bg-muted"
              >
                -
              </Button>
              <p className="text-[14px] font-normal text-[#2A2A25] sm:text-[16px]">1</p>
              <Button
                variant="default"
                className="h-full rounded-none border-l border-[#666666]/16 text-[14px] font-normal text-[#FE942A] transition-colors duration-300 hover:bg-muted sm:text-[16px]"
              >
                +
              </Button>
            </div>
            <p className="text-[15px] font-medium text-[#2F2A25] sm:text-[17.5px]">الكمية</p>
          </div>
        </div>

        {/* Product Image */}
        <img
          src={img || "/placeholder.svg"}
          alt={name}
          className="h-[120px] w-[130px] rounded-lg object-cover sm:h-[150px] sm:w-[160px] md:h-[180px] md:w-[194px]"
        />
      </div>
    </Card>
  )
}