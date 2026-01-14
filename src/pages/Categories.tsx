import CategoriesCards from "@/components/CategoriesCards";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Slider } from "@/components/Slider";
import Title from "@/components/Title";

export default function Categories() {
  return (
    <div>
       <Navbar />
       <div className="flex flex-col  mt-4 justify-center items-center relative gap-6 w-[1201px] h-[311px] mx-auto after:w-[172px] after:h-[148px] after:rounded-[21px] after:bg-linear-to-t after:from-[#FE942A] after:to-[#FE942A]/10 after:absolute after:bottom-0 after:left-[43%] after:z-[-1]">
          <Title title="الأصناف"/>
          <Slider />
       </div>
        <CategoriesCards />
        <Footer/>
    </div>
  )
}
