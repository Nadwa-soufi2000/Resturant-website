import { AddProduct } from "@/components/dashboard/AddProduct";
import ProductCard from "@/components/dashboard/ProductCard";
import { Slider } from "@/components/Slider";
import { Button } from "@/components/ui/button";

export default function Menu() {

  const categories = [
    {
      id: 1,
      img: "/pizza.png",
      name: "بيتزا",
      price: "ل.س 60",
    },
    {
      id: 2,
      img: "/burger.png",
      name: "برغر",
      price: "120 ل.س",
    },
    {
      id: 3,
      img: "/sandwitch.png",
      name: "سندويتش",
      price: "200 ل.س",
    },
    {
      id: 4,
      img: "/chicken.png",
      name: "دجاج",
      price: "60 ل.س",
    },
    {
      id: 5,
      img: "/juci.png",
      name: "عصائر طبيعية",
      price: "140 ل.س",
    },
    {
      id: 6,
      img: "/start.png",
      name: "مقبلات",
      price: "170 ل.س",
    },
    {
      id: 7,
      img: "/sweets.png",
      name: "حلويات",
      price: "50 ل.س",
    },
    {
      id: 8,
      img: "/hotdrinks.png",
      name: "مشروبات ساخنة",
      price: "88 ل.س",
    },
  ]

  return (
    <div className="w-full sm:w-full md:w-full lg:w-full xl:w-[1146px] my-[20px] mx-auto px-4 sm:px-6 md:px-8 lg:px-4 xl:px-0">
      <div className="flex flex-col gap-3 justify-between items-center">
          <div className="w-full sm:w-full md:w-[94%] lg:w-[90%] xl:w-[1086px] h-[50px] flex justify-between items-center">
            <Button className="w-[112px] h-[48px] hover:bg-accent bg-white rounded-[24px] shadow-xl font-medium text-[14px] text-[#FE942A]">إضافة قسم</Button>
            <h1 className="text-[24px] font-medium text-[#474747]">الأصناف</h1>
          </div>
          <div className="w-full">
          <Slider 
             size="true"
             sizeLg="true"
             numOfItemsLg="true"
          />
          </div>
      </div>

      <div className="w-full flex flex-col gap-4 my-[40px] justify-center items-center">
          <div className="w-full sm:w-full md:w-[94%] lg:w-[90%] xl:w-[1046px] h-[48px] flex justify-between items-center px-4 sm:px-0">
            <AddProduct />
            <h1 className="font-medium text-[24px] text-[#474747]">المنتجات</h1>
          </div>
          <div className="bg-[#F5F5F5] w-full flex justify-between items-center">
             <div className="w-full sm:w-full md:w-full lg:w-full xl:w-[1080px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mx-auto gap-3 pt-4 px-4 sm:px-3 md:px-2 lg:px-3 xl:px-0">
               {categories.map((item , index) => {
                  return(
                    <ProductCard 
                      key={index}
                      img={item.img}
                      name={item.name}
                      price={item.price} 
                    />
                  )
               })}
             </div>
          </div>
      </div>
    </div>
  )
}
