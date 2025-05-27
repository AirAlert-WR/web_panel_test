import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import {MySidebar, MySiteHeader} from "@/components/custom/global";

import { useCurrentPage } from "./pages"

export default function App() {

    return (
        <SidebarProvider>
            <MySidebar variant="inset" />
            <SidebarInset>
                <MySiteHeader />
                <div className="flex flex-1 flex-col">
                    {useCurrentPage().component()}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}