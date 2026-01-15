const SOCIAL_LINKS = [
  { icon: "/face.png", alt: "Facebook" },
  { icon: "/insta.png", alt: "Instagram" },
  { icon: "/face.png", alt: "Facebook" },
  { icon: "/whatsapp.png", alt: "WhatsApp" },
] as const

const NAV_ITEMS = ["تواصل معنا", "الأكثر طلباً", "الأصناف", "القائمة"] as const

export default function Footer() {
  
  return (
    <footer className="w-full h-auto md:h-[383px] bg-[#2F2A25] flex flex-col justify-center items-center gap-4 md:gap-6 py-8 md:py-0 px-4">
      <img src="/Herologo.png" alt="Hero Logo" className="w-[80px] h-[60px] md:w-[123px] md:h-[93px]" />

      <p className="text-base md:text-[20px] font-medium text-[#F9FAFB] text-center max-w-[90%] md:max-w-none">
        نقدم لك تجربة طعام مميزة بنكهة دافئة وجودة عالية
      </p>

      <div className="flex justify-center items-center gap-2 w-auto md:w-[147px] h-[30px]">
        {SOCIAL_LINKS.map((social, index) => (
          <SocialIcon key={`${social.alt}-${index}`} {...social} />
        ))}
      </div>

      <nav className="w-full max-w-[90%] md:w-[528px] h-auto md:h-[36px] flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
        {NAV_ITEMS.map((text) => (
          <NavLink key={text} text={text} />
        ))}
      </nav>

      <span className="w-[90%] md:w-[1204px] border border-[#F9FAFB]/40" />

      <p className="text-xs md:text-[14px] font-medium text-[#F9FAFB] text-center">
        اسم المطعم - جميع الحقوق محفوظة 2025
      </p>
    </footer>
  )
}

function SocialIcon({ icon, alt }: { icon: string; alt: string }) {
  return (
    <div className="w-[30px] h-[30px] bg-[#FE942A] flex justify-center items-center rounded-[15px]">
      <img src={icon || "/placeholder.svg"} alt={alt} className="w-[15px] h-[15px]" />
    </div>
  )
}

function NavLink({ text }: { text: string }) {
  return (
    <div className="bg-linear-to-r from-[#FFFFFF]/30 to-[#2F2A25] rounded-[12px] pl-[2px] pb-[2px]">
      <p className="w-full md:w-[123px] h-[36px] bg-[#2F2A25] font-medium text-base md:text-[18px] text-[#FFFFFF] rounded-[12px] flex justify-center items-center px-4 md:px-0">
        {text}
      </p>
    </div>
  )
}


//<div className="bg-linear-to-r from-[#FFFFFF]/30 to-[#2F2A25] rounded-[12px] pl-[2px] pb-[2px]"><p className="w-[123px] h-[36px] bg-[#2F2A25] font-medium text-[18px] text-[#FFFFFF] rounded-[12px] flex justify-center items-center">تواصل معنا</p></div>