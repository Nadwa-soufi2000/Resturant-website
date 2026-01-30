import AppSidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboardgrid() {
  return (
    <SidebarProvider className="flex min-h-screen w-full">
       <div className="flex-1 min-h-screen">
         <Topbar/>
         <Outlet/>
       </div>
       <AppSidebar/>
    </SidebarProvider>
  )
}