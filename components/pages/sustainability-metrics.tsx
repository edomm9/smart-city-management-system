"use client"

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Card } from "@/components/ui/card"
import { Leaf, Droplet, Wind } from "lucide-react"

const emissionData = [
  { month: "Jan", emissions: 2400, reduction: 400 },
  { month: "Feb", emissions: 2210, reduction: 390 },
  { month: "Mar", emissions: 2290, reduction: 410 },
  { month: "Apr", emissions: 2000, reduction: 460 },
  { month: "May", emissions: 2181, reduction: 500 },
  { month: "Jun", emissions: 2500, reduction: 480 },
]

const fuelData = [
  { week: "Week 1", savings: 1200 },
  { week: "Week 2", savings: 1400 },
  { week: "Week 3", savings: 1600 },
  { week: "Week 4", savings: 1800 },
]

export default function SustainabilityMetrics() {
  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Sustainability Metrics</h1>
        <p className="text-muted-foreground">Environmental impact and emissions tracking</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">CO₂ Reduction</h3>
              <p className="text-2xl font-bold text-primary">4,680 tons</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">This year vs. baseline</p>
        </Card>

        <Card className="p-6 bg-secondary/5 border-secondary/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-secondary/10">
              <Droplet className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Fuel Saved</h3>
              <p className="text-2xl font-bold text-secondary">24,500 L</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Estimated savings</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Wind className="w-6 h-6 text-foreground/60" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Avg. Speed</h3>
              <p className="text-2xl font-bold">32 km/h</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">↑ 18% improvement</p>
        </Card>
      </div>

      {/* Emissions Trend */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">CO₂ Emissions Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={emissionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
              labelStyle={{ color: "var(--color-foreground)" }}
              formatter={(value: number) => [`${value} tons`, "Emissions"]}
            />
            <Legend />
            <Bar dataKey="emissions" fill="var(--color-chart-1)" radius={[8, 8, 0, 0]} name="Baseline Emissions" />
            <Bar dataKey="reduction" fill="var(--color-chart-2)" radius={[8, 8, 0, 0]} name="Achieved Reduction" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Fuel Savings */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Weekly Fuel Savings</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={fuelData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="week" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
              labelStyle={{ color: "var(--color-foreground)" }}
              formatter={(value: number) => [`${value} L`, "Fuel Saved"]}
            />
            <Line
              type="monotone"
              dataKey="savings"
              stroke="var(--color-chart-1)"
              strokeWidth={2}
              name="Fuel Savings (L)"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Impact Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4">Environmental Goals</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Carbon Neutrality</span>
                <span className="text-sm font-bold text-primary">67%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "67%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Fuel Reduction</span>
                <span className="text-sm font-bold text-secondary">54%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-secondary h-2 rounded-full" style={{ width: "54%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Congestion Reduction</span>
                <span className="text-sm font-bold text-primary">42%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "42%" }} />
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4">Smart City Impact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span>Reduced vehicle emissions equivalent to 2,400 trees planted annually</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
              <span>Public health benefits from improved air quality</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span>Economic savings from reduced fuel consumption</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
              <span>Alignment with UN sustainable development goals</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
