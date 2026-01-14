import { Star } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

export default function CategoriesCards() {
   
  const products = [
      {
        id: 1,
        title: "فروج مشوي على الفحم",
        price: "250.00",
        originalPrice: "350.00",
        discount: "-25%",
        badge: "الأطباق الرئيسية",
        image: "/food.jpg",
      },
      {
        id: 2,
        title: "فروج مشوي على الفحم",
        price: "250.00",
        originalPrice: "350.00",
        discount: "",
        badge: "الأطباق الرئيسية",
        image: "/food.jpg",
      },
      {
        id: 3,
        title: "فروج مشوي على الفحم",
        price: "250.00",
        originalPrice: "350.00",
        discount: "-10%",
        badge: "الأطباق الرئيسية",
        image: "/food.jpg",
      },
      {
        id: 4,
        title: "فروج مشوي على الفحم",
        price: "250.00",
        originalPrice: "350.00",
        discount: "",
        badge: "الأطباق الرئيسية",
        image: "/food.jpg",
      },
      {
        id: 5,
        title: "فروج مشوي على الفحم",
        price: "250.00",
        originalPrice: "350.00",
        discount: "",
        badge: "الأطباق الرئيسية",
        image: "/food.jpg",
      },
      {
        id: 6,
        title: "فروج مشوي على الفحم",
        price: "250.00",
        originalPrice: "350.00",
        discount: "-10%",
        badge: "الأطباق الرئيسية",
        image: "/food.jpg",
      },
      {
        id: 7,
        title: "فروج مشوي على الفحم",
        price: "250.00",
        originalPrice: "350.00",
        discount: "-20%",
        badge: "الأطباق الرئيسية",
        image: "/food.jpg",
      },
      {
        id: 8,
        title: "فروج مشوي على الفحم",
        price: "250.00",
        originalPrice: "350.00",
        discount: "",
        badge: "الأطباق الرئيسية",
        image: "/food.jpg",
      },
      {
        id: 9,
        title: "فروج مشوي على الفحم",
        price: "250.00",
        originalPrice: "350.00",
        discount: "",
        badge: "الأطباق الرئيسية",
        image: "/food.jpg",
      },
      {
        id: 10,
        title: "فروج مشوي على الفحم",
        price: "250.00",
        originalPrice: "350.00",
        discount: "",
        badge: "الأطباق الرئيسية",
        image: "/food.jpg",
      },
    ]
  
    return (
      <main className=" bg-background py-12 px-4">
        <div className="mx-auto w-[1228px] flex flex-col justify-center items-center gap-6">
          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden relative bg-card shadow-lg hover:shadow-xl rounded-2xl transition-shadow flex flex-col duration-300 transition hover:scale-[1.05] ease-in-out "
                style={{
                  width: "282px",
                  height: "387.33px",
                  maxWidth: "100%",
                }}
              >
                {/* Discount Badge */}
                { product.discount != "" &&
                   <div className="absolute z-[1] top-0 left-0 bg-[#FE942A] flex justify-center items-center w-[44px] h-[44px] text-white rounded-[22px] text-[14px] font-bold">
                     {product.discount}
                   </div> 
                }
                {/* Image Container */}
                <div className=" relative w-full h-[199px] overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-[96%] h-full mx-auto rounded-tl-2xl rounded-tr-2xl"
                  />
                  {/* Subscription Badge */}
                  <div className="absolute top-3 right-3 w-[100px] h-[27px] font-medium bg-white/20  text-center text-white px-3 py-1 rounded text-[10px]">
                    {product.badge}
                  </div>
                </div>
  
                {/* Content Container */}
                <div className="flex flex-col  justify-center items-center gap-2 flex-1 p-1 w-[217px] h-[199px] mx-auto bg-white">
                  <div className="flex flex-col justify-center items-center h-[80px]">
                  {/* Title */}
                  <h3 className="text-[20px] font-medium text-[#2F2A25]">{product.title}</h3>
                  {/* Spacer to push content to bottom */}
                  <div className="flex-1" />
                  {
                    product.discount != "" && 
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <span className="text-[#5E6F7A] text-[14px]">{product.price}</span>
                      <Button variant="default" className="w-[23.83px] h-[10.33px] font-medium text-[9.99px] bg-[#FE942A] text-white rounded-none">{product.discount}</Button>
                    </div>
                  }
                  {/* Price Section */}
                  <div className="flex items-center justify-center" dir="rtl">
                    <span className="text-[16px] font-bold text-[#363842]">{product.originalPrice}</span>
                  </div>

                  <div className="flex justify-between items-center w-[82px] h-[12.5px]">
                    <div className="w-[53.45px] h-[9.72px] flex justify-between items-center">
                      <Star className="w-[9.72px] h-[9.72px] text-yellow-400 fill-current"/>
                      <Star className="w-[9.72px] h-[9.72px] text-yellow-400 fill-current"/>
                      <Star className="w-[9.72px] h-[9.72px] text-yellow-400 fill-current"/>
                      <Star className="w-[9.72px] h-[9.72px] text-yellow-400 fill-current"/>
                      <Star className="w-[9.72px] h-[9.72px] text-yellow-400 fill-current"/>
                    </div>
                    <div className="flex justify-center items-center gap-[1px]">
                      <img src="/Chat.png" alt="" className="w-[9.87px] h-[9.11px]"/>
                      <p className="text-[12px] font-medium text-[#5E6F7A]">97</p>
                    </div>
                  </div>
                 </div>
                  {/* Add to Cart Button */}
                  <div className="flex justify-center items-center gap-2 w-full relative top-[17px]">
                     <Button
                        variant="outline"
                        className="w-[104px] h-[44px] flex items-center justify-center gap-2 hover:bg-accent bg-transparent"
                      >
                        <span className="text-[12px] font-medium text-[#6F675F]">عرض التفاصيل</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-[129px] h-[44px] flex items-center justify-center gap-2 hover:bg-accent bg-transparent"
                      >
                        <span className="text-[16px] font-medium text-[#2F2A25]">أضف للسلة</span>
                        <img src="/icon2.png" alt="" className="w-[16px] h-[16px]"/>
                      </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    )
  }
  
  

