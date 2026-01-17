import Title from "./Title"
import { Card, CardContent } from "./ui/card"

export default function CategoriesComponent() {
  const categories = [
    {
      id: 1,
      img: "/pizza.png",
      name: "بيتزا",
      numOfKinds: 6,
    },
    {
      id: 2,
      img: "/burger.png",
      name: "برغر",
      numOfKinds: 10,
    },
    {
      id: 3,
      img: "/sandwitch.png",
      name: "سندويتش",
      numOfKinds: 7,
    },
    {
      id: 4,
      img: "/chicken.png",
      name: "دجاج",
      numOfKinds: 5,
    },
    {
      id: 5,
      img: "/juci.png",
      name: "عصائر طبيعية",
      numOfKinds: 3,
    },
    {
      id: 6,
      img: "/start.png",
      name: "مقبلات",
      numOfKinds: 8,
    },
    {
      id: 7,
      img: "/sweets.png",
      name: "حلويات",
      numOfKinds: 4,
    },
    {
      id: 8,
      img: "/hotdrinks.png",
      name: "مشروبات ساخنة",
      numOfKinds: 9,
    },
  ]
  
  return (
    <main className="py-12 px-4">
      <div className="mx-auto w-full md:w-[86%] lg:max-w-[1380px] flex flex-col justify-center items-center gap-6">
        <Title title="الأصناف" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full justify-items-center">
          {categories.map((item, index) => {
            return (
              <Card
                key={index}
                className="w-full max-w-[295px] lg:w-[295px] h-[273px] bg-[#F5F5F5] rounded-[30px] shadow-xl duration-300 transition hover:scale-[1.05] ease-in-out"
              >
                <CardContent className="mx-auto">
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt=""
                    className="w-full max-w-[178px] lg:w-[178px] h-auto lg:h-[137px] mx-auto"
                  />
                  <div className="space-y-2 pt-2">
                    <h1 className="font-bold text-[20px] text-center text-[#000000]">{item.name}</h1>
                    <p className="font-medium text-[20px] text-center text-[#000000]" dir="rtl">
                      صنف في المطعم {item.numOfKinds}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </main>
  )
}
