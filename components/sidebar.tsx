"use client"

import { cn } from "@/lib/utils"
import { LayoutDashboard, BarChart3, Brain, Network, Leaf, Activity, BookOpen } from "lucide-react"

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
}

const navigationItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "traffic-analytics", label: "Traffic Analytics", icon: BarChart3 },
  { id: "ai-models", label: "AI Models", icon: Brain },
  { id: "edge-architecture", label: "Edge Architecture", icon: Network },
  { id: "sustainability", label: "Sustainability Metrics", icon: Leaf },
  { id: "system-health", label: "System Health", icon: Activity },
  { id: "documentation", label: "Documentation", icon: BookOpen },
]

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-sidebar-primary/20 flex items-center justify-center">
            <Network className="w-5 h-5 text-sidebar-primary" />
          </div>
          <h1 className="text-lg font-bold">SmartCity</h1>
        </div>
        <p className="text-xs text-sidebar-foreground/60 mt-1">Traffic Management</p>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <div className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id as any)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  currentPage === item.id
                    ? "bg-sidebar-primary/20 text-sidebar-primary"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/10",
                )}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}
