import CategoriesComponent from "@/components/CategoriesComponent";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MostRequestedItems from "@/components/MostRequestedItems";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <MostRequestedItems />
      <CategoriesComponent />
      <Footer/>
    </div>
  )
}
