"use client"

import { cn } from "@/lib/utils"
import { LayoutDashboard, BarChart3, Brain, Network, Leaf, Activity, BookOpen } from "lucide-react"
import Image from "next/image"

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
}

const navigationItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "traffic-analytics", label: "Traffic Analytics", icon: BarChart3 },
  { id: "ai-models", label: "AI Models", icon: Brain },
  { id: "sustainability", label: "Sustainability Metrics", icon: Leaf },
  { id: "system-health", label: "System Health", icon: Activity },
]

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border overflow-y-auto">
      <div className="p-6 border-b border-sidebar-border bg-gradient-to-b from-sidebar via-sidebar to-sidebar/95">
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-14 h-14 rounded-lg bg-sidebar-accent/10 p-2 flex items-center justify-center border-2 border-sidebar-primary">
            <Image src="/images/logo.jpg" alt="AASTU Logo" width={48} height={48} className="object-contain" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-sidebar-primary">AASTU</h1>
            <p className="text-xs text-sidebar-foreground/70">Smart City Dashboard</p>
          </div>
        </div>
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
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all",
                  currentPage === item.id
                    ? /* Active state now uses gold background with navy text for strong contrast */
                      "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/20",
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
