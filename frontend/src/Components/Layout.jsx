import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/Components/Sidebar"
import { Outlet } from "react-router"

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="flex-1 w-full p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}