'use client'

import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/modeToggle";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }) {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                        <SidebarTrigger className="-ml-1" />
                        <ModeToggle />
                    </header>
                    {children}
                </SidebarInset>
            </SidebarProvider>


        </div>
    );
}