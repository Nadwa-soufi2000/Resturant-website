import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const MENU_ITEM_STYLES = "font-normal text-[18px] text-[#6F675F] hover:text-[#2F2A25] hover:font-bold duration-200 ease-in-out cursor-pointer"
const CART_ICON_STYLES = "rounded-[40px] bg-white flex justify-center items-center"

export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuItems = ["القائمة", "الأصناف", "الأكثر طلباً", "تواصل معنا"]

  return (
    <nav className="xl:w-full h-20 py-2 flex justify-center items-center shadow-[0_0_12px_0_rgba(0,0,0,0.15)] backdrop-blur-[30px] bg-[#F9FAFB]/90 transition-all duration-300">
      {/* Desktop Layout */}
      <div className="hidden xl:flex justify-between items-center w-[1235.19px] h-18.25">
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="default"
            className="bg-[#666666]/5 text-[#2F2A25] text-[15px] font-medium w-[142.19px] h-12 rounded-xl"
          >
            تسجيل الدخول
          </Button>
          <div className="flex justify-center items-center gap-1">
            <div className="flex justify-center items-end flex-col">
              <p className="text-[14px] font-medium text-[#A5A5A5]">سلة المشتريات</p>
              <p className="text-[14px] font-normal text-[#6F675F]">3 طلبات</p>
            </div>
            <img src="/Icon.png" alt="Cart Icon" className={`${CART_ICON_STYLES} p-2 w-[33px] h-[33px]`} />
          </div>
        </div>
        <ul className="flex justify-between items-center w-99 h-5">
          {menuItems.reverse().map((item) => (
            <li key={item} className={MENU_ITEM_STYLES}>
              {item}
            </li>
          ))}
        </ul>
        <img src="/Navlogo.png" alt="Logo" className="w-[96px] h-[73px]" />
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="xl:hidden flex justify-between items-center w-full px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Button
            variant="default"
            className="bg-[#666666]/5 text-[#2F2A25] text-[13px] md:text-[15px] font-medium px-3 md:px-4 h-10 md:h-12 rounded-xl whitespace-nowrap transition-all duration-300 hover:scale-105 hover:bg-[#666666]/10 active:scale-95"
          >
            تسجيل الدخول
          </Button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-[#6F675F] p-2 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Toggle menu"
        >
          <div className="transition-transform duration-300">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`xl:hidden absolute top-20 left-0 right-0 bg-[#F9FAFB]/95 backdrop-blur-[30px] shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] z-50 transition-all duration-300 origin-top ${
          mobileMenuOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-end px-6 py-4 gap-4">
          {menuItems.map((item, index) => (
            <li
              key={item}
              className={`font-normal text-[16px] md:text-[18px] text-[#6F675F] hover:text-[#2F2A25] hover:font-bold duration-200 ease-in-out cursor-pointer w-full text-right transition-all hover:translate-x-[-4px] ${
                mobileMenuOpen ? "animate-in fade-in slide-in-from-top-2" : ""
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item}
            </li>
          ))}
        </ul>
        <div
          className="px-6 pb-4 flex justify-end animate-in fade-in slide-in-from-top-2"
          style={{ animationDelay: "200ms" }}
        >
          <div className="flex flex-col items-end">
            <p className="text-[14px] font-medium text-[#A5A5A5]">سلة المشتريات</p>
            <p className="text-[14px] font-normal text-[#6F675F]">3 طلبات</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
