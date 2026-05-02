'use client'
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"

import { AvatarDemo } from "./avatarDemo";
import { WalletMinimal, ScrollText, Shapes, Calendar, ChartNoAxesCombined } from "lucide-react"

const menuItems = [
  { label: "Visão Geral", href: "/dashboard", icon: WalletMinimal },
  { label: "Transações", href: "/transacoes", icon: ScrollText  },
  { label: "Categorias", href: "/categorias", icon: Shapes  },
  { label: "Mensal", href: "/mensal", icon: Calendar  },
  { label: "Analitico", href: "/analitico", icon: ChartNoAxesCombined  },
]

export function AppSidebar({
  ...props
}) {

  const pathname = usePathname()

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <AvatarDemo />
        <div className="flex flex-col">
          <h1 className="font-medium">Mateus Saraiva</h1>
          <h2 className="font-extralight">LhaMoney</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
              <SidebarMenu>
                    {menuItems.map((item) => {
                      const isActive = pathname === item.href
                      const Icon = item.icon

                      return (
                        <Link key={item.href} href={item.href}>
                          <SidebarMenuButton
                            className={
                              isActive ? 'bg-sideBar-bg/20 border-r-5 border-selected-text text-selected-text transition-all hover:bg-sideBar-bg/20 hover:border-r-9 '
                              : 'text-unselected-text hover:bg-sideBar-bg/10'
                            }
                          >
                            <Icon />
                            {item.label}
                          </SidebarMenuButton>
                        </Link>
                      )
                    })}
              </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
