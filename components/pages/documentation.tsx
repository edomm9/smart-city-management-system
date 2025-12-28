"use client"

import { Card } from "@/components/ui/card"
import { FileText, BarChart3, Settings, Shield } from "lucide-react"

const sections = [
  {
    icon: FileText,
    title: "Architecture Overview",
    items: [
      "Edge-cloud hybrid deployment",
      "Distributed sensor network",
      "Real-time data processing pipeline",
      "Model serving and inference",
    ],
  },
  {
    icon: Settings,
    title: "Design Assumptions",
    items: [
      "Signal timing cycle: 120 seconds",
      "Sensor latency: <500ms",
      "Model update frequency: daily",
      "Data retention: 30 days edge, 365 days cloud",
    ],
  },
  {
    icon: Shield,
    title: "Non-Functional Requirements",
    items: [
      "Availability: 99.9% uptime",
      "Latency: <100ms decision time",
      "Throughput: 10,000+ vehicles/hour",
      "Fault tolerance: automatic failover",
    ],
  },
  {
    icon: BarChart3,
    title: "Technology Stack",
    items: [
      "Edge: TensorFlow Lite, MQTT",
      "Cloud: Python, PostgreSQL, Kubernetes",
      "Analytics: Prometheus, Grafana",
      "API: REST + gRPC",
    ],
  },
]

const constraints = [
  { category: "Power", description: "Edge nodes require <50W per unit during peak operation" },
  { category: "Network", description: "Bandwidth limited to 5Mbps per edge node average" },
  { category: "Compute", description: "Edge inference must complete within 50ms" },
  { category: "Storage", description: "Local storage limited to 128GB per edge node" },
]

export default function Documentation() {
  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Documentation</h1>
        <p className="text-muted-foreground">Technical specifications and system design</p>
      </div>

      {/* Main Documentation Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, idx) => {
          const Icon = section.icon
          return (
            <Card key={idx} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg font-bold">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )
        })}
      </div>

      {/* Constraints */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">System Constraints</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {constraints.map((constraint, idx) => (
            <div key={idx} className="bg-muted rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-2">{constraint.category}</h3>
              <p className="text-sm text-muted-foreground">{constraint.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Performance Targets */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Performance Targets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-4">Response Times</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Signal Control Decision</span>
                  <span className="font-semibold">50ms</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "50%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Incident Detection</span>
                  <span className="font-semibold">1.2s</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Analytics Query</span>
                  <span className="font-semibold">5s</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Throughput</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Vehicles per Hour</span>
                <span className="font-semibold">10,000+</span>
              </div>
              <div className="flex justify-between">
                <span>Sensor Data Points/sec</span>
                <span className="font-semibold">5,000+</span>
              </div>
              <div className="flex justify-between">
                <span>Concurrent Users</span>
                <span className="font-semibold">100+</span>
              </div>
              <div className="flex justify-between">
                <span>API Requests/sec</span>
                <span className="font-semibold">1,000+</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
