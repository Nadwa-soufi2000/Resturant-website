export default function Hero() {
  return (
    <div className="h-[318px] w-full bg-[url('/Hero.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2 w-[615px] h-[199.4px]">
        <img src="/Herologo.png" alt="" className="w-[75px] h-[70px]"/>
        <p className="text-[32px] font-bold text-[#F9FAFD]"> نكهة مميزة تبدأ من <span className="text-[hsl(30,99%,58%)]">اختيارك</span ></p>
      </div>
    </div>
  )
}
