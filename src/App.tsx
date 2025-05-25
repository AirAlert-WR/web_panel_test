import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import * as Pages from "./pages"

export default function App() {

    return (
        <SidebarProvider>
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col">
                    {Pages.useCurrentPage()?.component()}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}