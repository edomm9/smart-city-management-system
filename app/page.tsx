"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import TopBar from "@/components/top-bar"
import Overview from "@/components/pages/overview"
import TrafficAnalytics from "@/components/pages/traffic-analytics"
import AIModels from "@/components/pages/ai-models"
import EdgeArchitecture from "@/components/pages/edge-architecture"
import SustainabilityMetrics from "@/components/pages/sustainability-metrics"
import SystemHealth from "@/components/pages/system-health"
import Documentation from "@/components/pages/documentation"

type Page =
  | "overview"
  | "traffic-analytics"
  | "ai-models"
  | "edge-architecture"
  | "sustainability"
  | "system-health"
  | "documentation"

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState<Page>("overview")

  const renderPage = () => {
    switch (currentPage) {
      case "traffic-analytics":
        return <TrafficAnalytics />
      case "ai-models":
        return <AIModels />
      case "edge-architecture":
        return <EdgeArchitecture />
      case "sustainability":
        return <SustainabilityMetrics />
      case "system-health":
        return <SystemHealth />
      case "documentation":
        return <Documentation />
      case "overview":
      default:
        return <Overview />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-auto">{renderPage()}</main>
      </div>
    </div>
  )
}
