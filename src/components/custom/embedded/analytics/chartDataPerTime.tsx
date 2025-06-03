"use client"

import {Area, AreaChart, CartesianGrid, XAxis} from "recharts"

import {useIsMobile} from "@/lib/use-mobile.ts"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card.tsx"
import {type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent,} from "@/components/ui/chart.tsx"
import type {FilteredMeasurementData, MeasurementData} from "@/types/apiTypes.ts";

//type ChartConfig = Record<string, { label: string; color: string }>

interface ChartDataPerTimeProps {
  data: FilteredMeasurementData[] // API-Daten
  measurementKey: keyof MeasurementData // z.B. "temperature"
}

export function ChartDataPerTime({ data, measurementKey }: ChartDataPerTimeProps) {
  const isMobile = useIsMobile()

  // Extrahiere alle Controller-IDs
  const controllerIds = Array.from(
      new Set(data.flatMap(entry => entry.data.map(d => d.controllerID)))
  )

  // Erstelle ChartConfig dynamisch pro Controller
  const chartConfig: ChartConfig = Object.fromEntries(
      controllerIds.map(id => [
        id,
        {
          label: id,
          color: `hsl(${Math.random() * 360}, 70%, 50%)` // Oder per definierter Farbpalette
        }
      ])
  )

  // Mapping der API-Daten in Chart-kompatible Struktur
  const chartData = data.map(entry => {
    const point: Record<string, string | number> = {
      date: entry.timestamp.toString()
    }
    for (const { controllerID, data: m } of entry.data) {
      point[controllerID] = m[measurementKey]
    }
    return point
  })

  return (
      <Card className="@container/card">
        <CardHeader>
          <CardTitle>{measurementKey.toString().toUpperCase()}</CardTitle>
          <CardDescription>
            <span className="hidden @[540px]/card:block">Last 3 months</span>
            <span className="@[540px]/card:hidden">3 months</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[250px] w-full"
          >
            <AreaChart
                data={chartData}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={(value) => {
                    const date = new Date(value)
                    return date.toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit"
                    })
                  }}
              />
              <ChartTooltip
                  cursor={false}
                  defaultIndex={isMobile ? -1 : chartData.length - 1}
                  content={
                    <ChartTooltipContent
                        labelFormatter={(value) => {
                          const date = new Date(value)
                          return date.toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit"
                          })
                        }}
                        indicator="dot"
                    />
                  }
              />
              {controllerIds.map((id) => (
                  <Area
                      key={id}
                      dataKey={id}
                      type="natural"
                      fill={`url(#fill-${id})`}
                      stroke={chartConfig[id].color}
                      stackId="a"
                      animationDuration={0}
                  />
              ))}
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
  )
}
