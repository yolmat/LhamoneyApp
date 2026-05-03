"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { HeaderDashboard } from "@/components/headerDashboard";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <HeaderDashboard />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
