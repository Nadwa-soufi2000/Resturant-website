import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"
import Title from "./Title"

export default function MostRequestedItems() {
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
    <main className=" bg-background py-12 px-4">
      <div className="mx-auto w-[1228px] flex flex-col justify-center items-center gap-6">
        <Title title="الأكثر طلباً"/>
        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden relative bg-card shadow-lg hover:shadow-xl rounded-2xl transition-shadow flex flex-col duration-300 transition hover:scale-[1.05] ease-in-out "
              style={{
                width: "368.67px",
                height: "422px",
                maxWidth: "100%",
              }}
            >
              {/* Discount Badge */}
              <div className="absolute z-[1] top-0 left-0 bg-[#FE942A] flex justify-center items-center w-[44px] h-[44px] text-white rounded-[22px] text-[14px] font-bold">
                {product.discount}
              </div>
              {/* Image Container */}
              <div className=" relative w-full h-[199px] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-[96%] h-full mx-auto rounded-tl-2xl rounded-tr-2xl object-cover"
                />
                {/* Subscription Badge */}
                <div className="absolute top-3 right-3 w-[100px] h-[27px] font-medium bg-white/20 text-center text-white px-3 py-1 rounded text-[10px]">
                  {product.badge}
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col justify-center items-center flex-1 p-1 w-[217px] h-[199px] mx-auto bg-white">
                <div className="space-y-2">
                   {/* Title */}
                   <h3 className="text-[20px] font-medium text-[#2F2A25]">{product.title}</h3>

                   {/* Description */}
                   <p className="text[14px] font-normal text-[#6F675F]">{product.description}</p>

                   {/* Spacer to push content to bottom */}
                   <div className="flex-1" />

                   {/* Price Section */}
                   <div className="flex items-center justify-center gap-5 mb-4" dir="rtl">
                     <span className="text-[18px] font-bold text-[#363842]">{product.price}</span>
                     <span className="text-[#5E6F7A] text-[14px]">{product.originalPrice}</span>
                   </div>
               </div>

                {/* Add to Cart Button */}
                <Button
                  variant="outline"
                  className="w-[151px] h-[48px] flex items-center justify-center rounded-[24px] gap-2 hover:bg-accent bg-transparent"
                >
                  <Plus className="h-4 w-4 text-[#2F2A25]" />
                  <span className="text-[16px] font-medium text-[#2F2A25]">أضف للسلة</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

