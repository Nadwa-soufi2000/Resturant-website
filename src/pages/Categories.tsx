import CategoriesCards from "@/components/CategoriesCards";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Slider } from "@/components/Slider";
import Title from "@/components/Title";

export default function Categories() {
  return (
    <div>
       <Navbar />
          <div className="flex flex-col w-full mt-4 justify-center items-center relative gap-6 w-[1201px] h-[311px] mx-auto md:after:w-[172px] md:after:h-[148px] sm:after:w-[150px] sm:after:h-[130px] after:w-[140px] after:h-[120px] after:rounded-[21px] after:bg-linear-to-t after:from-[#FE942A] after:to-[#FE942A]/10 after:absolute md:after:bottom-0 sm:after:bottom-[2%] after:bottom-[3%] xl:after:left-[44.4%] after:z-[-1] lg:after:left-[42.3%]">
             <Title title="الأصناف"/>
             <Slider />
          </div>
        <CategoriesCards />
        <Footer/>
    </div>
  )
}
