"use client"

import KPICard from "@/components/kpi-card"
import CityMap from "@/components/city-map"
import ArchitecturePanel from "@/components/architecture-panel"

export default function Overview() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Overview</h1>
        <p className="text-muted-foreground">Real-time traffic intelligence and system performance</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Avg. Delay Reduction" value="23.4" unit="%" trend="up" color="primary" />
        <KPICard title="Intersection Throughput" value="1,247" unit="vehicles/hr" trend="up" color="secondary" />
        <KPICard title="CO₂ Reduction" value="156" unit="tons/day" trend="up" color="primary" />
        <KPICard title="Incident Detection" value="1.2" unit="sec latency" trend="down" color="secondary" />
      </div>

      {/* City Map and Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CityMap />
        </div>
        <div>
          <ArchitecturePanel />
        </div>
      </div>
    </div>
  )
}
