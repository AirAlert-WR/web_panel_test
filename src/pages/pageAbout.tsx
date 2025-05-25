import * as Icons from "@tabler/icons-react";
import {Card} from "@/components/ui/card.tsx";


export const DATA = {
    id: "about",
    title: "About this app / project",
    icon: Icons.IconInfoCircle,
    component: Content,
    enabled: true,
}

function Content() {
    return (

        <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <div className="px-4 lg:px-6">

                    <Card className="@container/card">
                        Info text
                    </Card>

                </div>
            </div>
        </div>
    )
}