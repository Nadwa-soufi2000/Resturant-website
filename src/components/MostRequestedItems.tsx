import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"
import Title from "./Title"
//import { useNavigate } from "react-router-dom"
import { useAction } from "@/context/GlobalContext"
import { ADD_TO_TROLLEY } from "@/context/Actions"

export default function MostRequestedItems() {
  //const path = useNavigate()
  const { ActionTrigger , Orders } = useAction()
  const products = [
    {
      id: 1,
      title: "فروج مشوي على الفحم",
      description: "فروج مشوي بدون أرز مشمش",
      price: "250.00",
      originalPrice: "350.00",
      discount: "خصم",
      badge: "الأطباق الرئيسية",
      image: "/food.jpg",
    },
    {
      id: 2,
      title: "فروج مشوي على الفحم",
      description: "فروج مشوي بدون أرز مشمش",
      price: "250.00",
      originalPrice: "350.00",
      discount: "خصم",
      badge: "الأطباق الرئيسية",
      image: "/food.jpg",
    },
    {
      id: 3,
      title: "فروج مشوي على الفحم",
      description: "فروج مشوي بدون أرز مشمش",
      price: "250.00",
      originalPrice: "350.00",
      discount: "خصم",
      badge: "الأطباق الرئيسية",
      image: "/food.jpg",
    },
  ]

  return (
    <main className="bg-background py-12 px-4">
      <div className="mx-auto w-full md:w-[86%] lg:max-w-[1308px] flex flex-col items-center gap-6">
        <Title title="الأكثر طلباً" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden pt-2 relative bg-card shadow-lg hover:shadow-xl rounded-2xl flex flex-col transition-all duration-300 hover:scale-[1.05] w-full max-w-[368.67px] mx-auto lg:w-[368.67px] h-[422px]"
            >
              <div className="absolute z-10 top-0 left-0 bg-[#FE942A] flex items-center justify-center w-11 h-11 text-white rounded-[22px] text-sm font-bold">
                {product.discount}
              </div>

              <div className="relative w-full h-[199px] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-[96%] h-full mx-auto rounded-t-2xl object-cover"
                />
                <div className="absolute top-3 right-3 w-[100px] h-[27px] font-medium bg-white/20 text-center text-white px-3 py-1 rounded text-[10px]">
                  {product.badge}
                </div>
              </div>

              <div className="flex flex-col items-center flex-1 p-4 bg-white">
                <div className="flex flex-col items-center gap-2 w-[217px]">
                  <h3 className="text-xl font-medium text-[#2F2A25] text-center">{product.title}</h3>

                  <p className="text-sm font-normal text-[#6F675F] text-center">{product.description}</p>

                  <div className="flex items-center justify-center gap-5 mt-2" dir="rtl">
                    <span className="text-lg font-bold text-[#363842]">{product.price}</span>
                    <span className="text-[#5E6F7A] text-sm ">{product.originalPrice}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-[151px] h-12 relative top-[15px] flex items-center justify-center rounded-3xl gap-2 hover:bg-accent bg-transparent mt-auto"
                  onClick={() => {ActionTrigger({type: ADD_TO_TROLLEY , payload: product }); console.log(Orders)}}
                >
                  <Plus className="h-4 w-4 text-[#2F2A25]" />
                  <span className="text-base font-medium text-[#2F2A25]">أضف للسلة</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}