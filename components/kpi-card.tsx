import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface KPICardProps {
  title: string
  value: string
  unit: string
  trend?: "up" | "down"
  color?: "primary" | "secondary"
}

export default function KPICard({ title, value, unit, trend, color = "primary" }: KPICardProps) {
  const colorClass = color === "primary" ? "text-primary" : "text-secondary"

  return (
    <div className="bg-card rounded-lg border border-border p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {trend && (
          <div className="flex items-center gap-1">
            {trend === "up" ? (
              <TrendingUp className={cn("w-4 h-4", colorClass)} />
            ) : (
              <TrendingDown className={cn("w-4 h-4", colorClass)} />
            )}
          </div>
        )}
      </div>
      <div className="flex items-baseline gap-2">
        <span className={cn("text-2xl font-bold", colorClass)}>{value}</span>
        <span className="text-sm text-muted-foreground">{unit}</span>
      </div>
    </div>
  )
}
