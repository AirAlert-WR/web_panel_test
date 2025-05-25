import {SectionCards} from "@/components/section-cards.tsx";
import * as Icons from "@tabler/icons-react";

export const DATA = {
    id: "controllers",
    title: "Controllers",
    icon: Icons.IconDeviceRemote,
    component: Content,
    enabled: true,
}

function Content() {
    return (

        <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <SectionCards/>
            </div>
        </div>

    )
}