import * as React from "react"
import * as Icons from "@tabler/icons-react"

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter, SidebarGroup, SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import * as Pages from "@/pages"

const data = {
  // User data TODO TEMPORARY
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/logo.png",
    onLogout: () => null,
  }
}

function NavigationSection(
    { items, ...props }: {
      items: Pages.Page[]
    } & React.ComponentPropsWithoutRef<typeof SidebarGroup>
) {
  const setCurrentPage = Pages.usePageStore((state) => state.setCurrentPage)
  return (
      <SidebarGroup {...props}>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton variant={"outline"} disabled={!item.enabled}
                                     onClick={() =>  setCurrentPage(item.id)}>

                    {item.icon && <item.icon />}
                    <span>{item.title}</span>

                  </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
  )
}

export function AppSidebar(
    { ...props }: React.ComponentProps<typeof Sidebar>
) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>

            {/* Application caption as a button*/}
            <SidebarMenuButton
              className="bg-primary text-primary-foreground data-[slot=sidebar-menu-button]:!p-1.5"
              onClick={() =>  Pages.usePageStore.getState().setCurrentPage(Pages.DefaultPageID)}
            >
              <Icons.IconInnerShadowTop className="!size-5" />
              <span className="text-base font-semibold">AirAlert Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>

        {/* Primary navigation items */}
        <NavigationSection id={"NavigationMain"} items={Pages.usePageStore.getState().pages} />

        {/* Secondary navigation items TODO OPTIONALLY */}
        {/*<NavigationSection id={"NavigationSecondary"} items={data.navSecondary} className={"mt-auto"}/>*/}

      </SidebarContent>
      <SidebarFooter>

        {/* User account button */}
        <NavUser user={data.user} />

      </SidebarFooter>
    </Sidebar>
  )
}
