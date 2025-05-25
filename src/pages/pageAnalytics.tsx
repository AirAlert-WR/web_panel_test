import * as Icons from "@tabler/icons-react";
import {ChartAreaInteractive} from "@/components/chart-area-interactive.tsx";


export const DATA = {
    id: "analytics",
    title: "Analytics",
    icon: Icons.IconChartBar,
    component: Content,
    enabled: true,
}

function Content() {
    return (
        <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <div className="px-4 lg:px-6">
                    <ChartAreaInteractive />
                </div>
            </div>
        </div>
    )
}