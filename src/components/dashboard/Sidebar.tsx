import { 
  Home, 
  LayoutGrid, 
  List, 
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router-dom"

// Menu items.
const items = [
  {
    label: "لوحة التحكم",
    url: "/dashboard",
    icon: Home,
  },
  {
    label: "إدارة المينو",
    url: "/dashboard/menu",
    icon: LayoutGrid,
  },
  {
    label: "إدارة الطلبات",
    url: "/dashboard/orders",
    icon: List,
  },
  {
    label: "إدارة المستخدمين",
    url: "/dashboard/users",
    icon: Users,
  }
]



export default function AppSidebar() {

  const path = useLocation()
  const currentUrl = path.pathname;

  return (
    <Sidebar side="right" className="w-[290px] min-h-screen border-l-[1px] border-[#666666]/16 shadow-xl">
      <SidebarContent className="pt-5">
        <SidebarGroup className="pt-5">
          <SidebarGroupLabel className="flex justify-center items-center">
            <img src="/Navlogo.png" alt="" className="w-[102.69px] h-[81.02px]"/>
          </SidebarGroupLabel>
          <SidebarGroupContent className="pt-10">
            <SidebarMenu className="pt-2  border-t border-t-[#666666]/16">
              {items.map((item) => (
                <SidebarMenuItem key={item.label} className={`w-[280px] h-[40px] rounded-[9px] hover:bg-[#666666]/3 ${currentUrl === item.url && "bg-[#666666]/5"} hover:pr-2 duration-300 ease-in-out relative`}>
                  <SidebarMenuButton asChild className={`flex justify-end w-full h-full hover:bg-[#666666]/3 ${currentUrl === item.url && "after:absolute after:w-[4px] after:h-full after:bg-[#F7931A] after:right-0"}`}>
                    <Link to={item.url}>
                      <span className={`text-[16px] ${currentUrl === item.url ? "font-bold" : "font-normal"} text-[#2F2A25]`}>{item.label}</span>
                      <item.icon className="w-[17px] h-[18px] text-[#2F2A25]"/>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
