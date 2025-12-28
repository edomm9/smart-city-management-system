"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"
import { Card } from "@/components/ui/card"

const volumeData = [
  { time: "6:00", volume: 1200, peak: 800 },
  { time: "7:00", volume: 2100, peak: 1400 },
  { time: "8:00", volume: 2800, peak: 2000 },
  { time: "9:00", volume: 2200, peak: 1800 },
  { time: "10:00", volume: 1800, peak: 1200 },
  { time: "17:00", volume: 2400, peak: 1900 },
  { time: "18:00", volume: 3100, peak: 2400 },
  { time: "19:00", volume: 2500, peak: 1600 },
]

const congestionData = [
  { intersection: "I-1", congestion: 78 },
  { intersection: "I-2", congestion: 45 },
  { intersection: "I-3", congestion: 62 },
  { intersection: "I-4", congestion: 38 },
  { intersection: "I-5", congestion: 71 },
]

export default function TrafficAnalytics() {
  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Traffic Analytics</h1>
        <p className="text-muted-foreground">Detailed insights into traffic patterns and congestion</p>
      </div>

      {/* Traffic Volume */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Traffic Volume Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={volumeData}>
            <defs>
              <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-chart-1)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-chart-1)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="time" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
              labelStyle={{ color: "var(--color-foreground)" }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="volume"
              stroke="var(--color-chart-1)"
              fillOpacity={1}
              fill="url(#colorVolume)"
              name="Peak Volume"
            />
            <Area
              type="monotone"
              dataKey="peak"
              stroke="var(--color-chart-2)"
              fillOpacity={0.1}
              name="Off-Peak Volume"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* Congestion Heatmap */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Congestion by Intersection</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={congestionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="intersection" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
              labelStyle={{ color: "var(--color-foreground)" }}
              formatter={(value: number) => [`${value}%`, "Congestion Level"]}
            />
            <Bar dataKey="congestion" fill="var(--color-chart-1)" radius={[8, 8, 0, 0]} name="Congestion Level (%)" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Peak vs Off-Peak Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4">Peak Hours Performance</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-sm font-medium">Avg. Wait Time</span>
              <span className="text-2xl font-bold text-primary">4.2 min</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "68%" }} />
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-sm font-medium">Throughput</span>
              <span className="text-2xl font-bold text-secondary">1,847 v/hr</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full" style={{ width: "82%" }} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4">Off-Peak Performance</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-sm font-medium">Avg. Wait Time</span>
              <span className="text-2xl font-bold text-primary">1.1 min</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "18%" }} />
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-sm font-medium">Throughput</span>
              <span className="text-2xl font-bold text-secondary">892 v/hr</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full" style={{ width: "39%" }} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
