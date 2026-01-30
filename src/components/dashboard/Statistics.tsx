import type { statistics } from "@/types/types-data";

export default function Statistics(
{
  logoimg , 
  arrowimg , 
  color1 , 
  color2 , 
  color3 , 
  bgColor , 
  text , 
  value , 
  rating
} : statistics) {
  return (
    
    <div className={`w-full xl:w-[220px] h-[112px] ${bgColor} rounded-[6px] flex justify-center items-center hover:scale-[1.06] duration-300 ease-in-out shadow-xl`}>
      <div className="w-[150px] h-[75.44px] flex flex-col justify-between items-center">
         <div className="flex justify-between items-center w-full">
            <img src={logoimg} className="w-[19.52px] h-[19.44px]"/>
            <h2 className={`${color1}`}>{text}</h2>
         </div>
         <div className="flex justify-between items-center w-full">
            <p className={`${color3} font-bold text-[24px]`}>{value}</p>
            <div className="flex justify-center items-center gap-1">
                <p className={`${color2} text-[14px] font-normal`}>{rating}</p>
               <img src={arrowimg} className="w-[16px] h-[10px]"/>
            </div>
         </div>
      </div>
    </div>
  )
}
