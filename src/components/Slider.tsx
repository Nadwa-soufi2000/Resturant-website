import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Slider() {

 const categories = [
    {
       id: 1,
       img: "/pizza.png",
       name: "بيتزا",
       numOfKinds: 6
    }
    ,
    {
       id: 2,
       img: "/burger.png",
       name: "برغر",
       numOfKinds: 10
    }
    ,
    {
       id: 3,
       img: "/sandwitch.png",
       name: "سندويتش",
       numOfKinds: 7
    }
    ,
    {
       id: 4,
       img: "/chicken.png",
       name: "دجاج",
       numOfKinds: 5
    }
    ,
    {
       id: 5,
       img: "/juci.png",
       name: "عصائر طبيعية",
       numOfKinds: 3
    }
    ,
    {
       id: 6,
       img: "/start.png",
       name: "مقبلات",
       numOfKinds: 8
    }
    ,
    {
       id: 7,
       img: "/sweets.png",
       name: "حلويات",
       numOfKinds: 4
    }
    ,
    {
       id: 8,
       img: "/hotdrinks.png",
       name: "مشروبات ساخنة",
       numOfKinds: 9
    }
  ]

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[1201px]"
    >
      <CarouselContent>
        {categories.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
            <div className="flex flex-col justify-center items-center gap-4">
              <img src={item.img} alt="" className="w-[110px] h-[110px] rounded-full"/>
              <div className="">
                <h1 className="text-[16px] font-bold text-[#6F675F] text-center">{item.name}</h1>
                <p className="text-[16px] font-normal text-[#6F675F] text-center">صنف {item.numOfKinds}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="w-[46.31px] h-[46.31px] text-[#FE942A]  border-3 border-[#FE942A] font-bold hover:text-[#FE942A]" />
      <CarouselNext className="w-[46.31px] h-[46.31px] text-[#FE942A] border-3 border-[#FE942A] font-bold hover:text-[#FE942A]" />
    </Carousel>
  )
}
