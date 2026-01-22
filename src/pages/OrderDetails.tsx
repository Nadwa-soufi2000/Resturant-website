import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import {ShoppingBasketIcon, Star } from "lucide-react"
import { useParams } from "react-router-dom"

export default function OrderDetails() {

  const { id } = useParams()
  console.log(id)

  return (
    <div>
      <Navbar />
      <div className="xl:w-[1200px] w-full mx-auto px-4 lg:px-0 py-6 flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row xl:justify-between lg:justify-center justify-between items-center w-full xl:gap-6 lg:gap-11 gap-6 xl:px-0 px-2">
          {/* Details */}
          <div className="flex flex-col justify-between w-full xl:w-[734px] lg:w-[580px] h-auto lg:h-[403px] gap-4">
            {/* Title */}
            <div className="flex flex-row-reverse justify-between items-center w-full gap-2">
              <h1 className="text-[24px] lg:text-[32px] font-bold text-[#2F2A25]">مندي دجاج</h1>
              <Button
                variant="default"
                className="w-[106px] h-[40px] rounded-[8px] bg-[#666666]/5 text-[16px] font-medium text-[#2F2A25]"
              >
                مشاوي
              </Button>
            </div>

            {/* Price & Rating */}
            <div className="flex justify-between items-center flex-row-reverse w-full">
              <p className="font-bold text-[#2F2A25] text-[20px] lg:text-[25px]">18,000 ل.س</p>
              <div className="text-[#FFC400] flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-current w-[20px] h-[20px]" />
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col items-end">
              <h2 className="text-[20px] lg:text-[24px] text-[#6F675F] font-medium">الوصف</h2>
              <p className="text-[14px] lg:text-[16px] text-[#6F675F] font-medium text-right">
                دجاج مندي مطهو على الطريقة التقليدية مع أرز بسمتي متبل بتوابل خاصة ونكهة مدخنة مميزة
              </p>
            </div>

            {/* Ingredients */}
            <div className="flex flex-col items-end">
              <h2 className="text-[20px] lg:text-[24px] text-[#6F675F] font-medium">المكونات</h2>
              <p className="text-[14px] lg:text-[16px] text-[#6F675F] font-medium text-right">
                دجاج طازج كامل أرز بسمتي بهارات مندي خاصة بصل توم صوص هندي
              </p>
            </div>

            {/* Quantity & Button */}
            <div className="flex lg:flex-row flex-col justify-between lg:items-center sm:items-end items-center gap-4"> 
              <Button
                variant="default"
                className="w-full sm:w-[50%] xl:w-[412px] lg:w-[300px] h-[57px] flex items-center justify-center rounded-[5.18px] gap-2 bg-[#FE942A]"
              >
                <ShoppingBasketIcon className="w-[21px] h-[21px]"/>
                <span className="text-[18px] lg:text-[20px] font-medium text-[#FFFFFF]">أضف للسلة</span>
                {/*<img src="/icon2.png" alt="" className="w-[21px] h-[21px]" />*/}
              </Button>
              <div className="w-full sm:w-[50%] lg:w-[297px] h-[49px] flex justify-between items-center">
                <div className="flex justify-between items-center w-[184px] h-[49px] border border-[#666666]/16 bg-[#FFFFFF]">
                  <Button className="h-full rounded-none text-[#FE942A] hover:bg-[#666666]/16">-</Button>
                  <p className="text-[16px] font-normal text-[#2A2A25]">1</p>
                  <Button className="h-full rounded-none text-[#FE942A] hover:bg-[#666666]/16">+</Button>
                </div>
                <p className="font-medium text-[18px] lg:text-[20px] text-[#2F2A25]">الكمية</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <img
            src="/food2.png"
            alt=""
            className="w-full max-w-[403px] h-auto lg:h-[403px] rounded-[8px]"
          />
        </div>

        {/* Notes */}
        <div className="flex flex-col justify-center items-end gap-1">
          <p className="font-bold text-[20px] lg:text-[24px] text-[#6F675F]">الملاحظات</p>
          <textarea
            className="font-normal text-[14px] lg:text-[16px] text-[#6F675F] w-full h-[181px] border border-[#666666]/30 pr-3 pt-3"
            placeholder="أضف ملاحظاتك"
            dir="rtl"
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}
