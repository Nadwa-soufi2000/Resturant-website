import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Slider({size , sizeLg , numOfItemsLg} : {size? : string , sizeLg? : string , numOfItemsLg?: string}) {

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
      className={`w-[200px] sm:w-[440px] ${sizeLg ? "lg:w-[470px] md:w-[400px]" : "lg:w-[900px] md:w-[600px]"} mx-auto  ${size ? "xl:w-[1019.36px]" : "xl:w-[1201px]"}`}
    >
      <CarouselContent>
        {categories.map((item, index) => (
          <CarouselItem key={index} className={`basis-1/1 sm:basis-1/3 md:basis-1/3 ${numOfItemsLg ? "lg:basis-1/3 xl:basis-1/5" : "lg:basis-1/5"}`}>
            <div className="flex flex-col justify-center items-center mb-3 gap-2 sm:gap-3 lg:gap-4">
              <img
                src={item.img || "/placeholder.svg"}
                alt=""
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-[110px] lg:h-[110px] rounded-full"
              />
              <div className="">
                <h1 className="text-sm sm:text-[15px] lg:text-[16px] font-bold text-[#6F675F] text-center">
                  {item.name}
                </h1>
                <p className="text-sm sm:text-[15px] lg:text-[16px] font-normal text-[#6F675F] text-center">
                  صنف {item.numOfKinds}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[46.31px] lg:h-[46.31px] text-[#FE942A] border-3 border-[#FE942A] font-bold hover:text-[#FE942A]" />
      <CarouselNext className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[46.31px] lg:h-[46.31px] text-[#FE942A] border-3 border-[#FE942A] font-bold hover:text-[#FE942A]" />
    </Carousel>
  )
}
