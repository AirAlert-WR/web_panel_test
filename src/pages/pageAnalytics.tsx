import * as Icons from "@tabler/icons-react";
import {ChartDataPerTime} from "@/components/custom/embedded/analytics/chartDataPerTime.tsx";
import type {FilteredMeasurementData} from "@/types/apiTypes.ts";


export const DATA = {
    id: "analytics",
    title: "Analytics",
    icon: Icons.IconChartBar,
    component: Content,
    enabled: true,
}

const measurementData: FilteredMeasurementData[] = [
    {
        timestamp: new Date(Date.now()-10000).toISOString(),
        data: [
            {
                controllerID: "Erdgeschoss",
                data: {
                    pm2_5: 3.5,
                    pm10: 0,
                    temperature: 20,
                    humidity: 50,
                    co2: 1
                }
            },
            {
                controllerID: "Draußen",
                data: {
                    pm2_5: 3.5,
                    pm10: 0,
                    temperature: 20,
                    humidity: 50,
                    co2: 1
                }
            }
        ]
    },
    {
        timestamp: new Date(Date.now()-5000).toISOString(),
        data: [
            {
                controllerID: "Erdgeschoss",
                data: {
                    pm2_5: 3.0,
                    pm10: 0,
                    temperature: 20,
                    humidity: 50,
                    co2: 1
                }
            },
            {
                controllerID: "Draußen",
                data: {
                    pm2_5: 4.0,
                    pm10: 0,
                    temperature: 20,
                    humidity: 50,
                    co2: 1
                }
            }
        ]
    },
    {
        timestamp: new Date(Date.now()).toISOString(),
        data: [
            {
                controllerID: "Erdgeschoss",
                data: {
                    pm2_5: 3.5,
                    pm10: 0,
                    temperature: 20,
                    humidity: 50,
                    co2: 1
                }
            },
            {
                controllerID: "Draußen",
                data: {
                    pm2_5: 2.0,
                    pm10: 0,
                    temperature: 20,
                    humidity: 50,
                    co2: 1
                }
            }
        ]
    }

]

function Content() {
    return (
        <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <div className="px-4 lg:px-6 space-y-6">

                    <ChartDataPerTime data={measurementData} measurementKey={"pm2_5"} />
                    <ChartDataPerTime data={measurementData} measurementKey={"pm10"} />
                    <ChartDataPerTime data={measurementData} measurementKey={"co2"} />
                    <ChartDataPerTime data={measurementData} measurementKey={"temperature"} />
                    <ChartDataPerTime data={measurementData} measurementKey={"humidity"} />
                </div>
            </div>
        </div>
    )
}