import CategoriesCards from "@/components/CategoriesCards";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Slider } from "@/components/Slider";
import Title from "@/components/Title";

export default function Categories() {
  return (
    <div>
       <Navbar />
       <div className="flex flex-col  mt-4 justify-center items-center gap-6 w-[1201px] h-[311px] mx-auto">
          <Title title="الأصناف"/>
          <Slider />
       </div>
        <CategoriesCards />
        <Footer/>
    </div>
  )
}
