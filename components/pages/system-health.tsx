"use client"

import { Card } from "@/components/ui/card"
import { Activity, AlertCircle, Zap, Wifi } from "lucide-react"

const edgeNodes = [
  { name: "Edge Node 1", uptime: 99.97, status: "Operational", connectivity: "Excellent" },
  { name: "Edge Node 2", uptime: 99.94, status: "Operational", connectivity: "Excellent" },
  { name: "Edge Node 3", uptime: 99.89, status: "Operational", connectivity: "Good" },
  { name: "Edge Node 4", uptime: 98.76, status: "Degraded", connectivity: "Fair" },
  { name: "Edge Node 5", uptime: 99.99, status: "Operational", connectivity: "Excellent" },
]

const alerts = [
  { time: "Today 14:32", severity: "warning", message: "Edge Node 4 connectivity degraded", resolved: false },
  { time: "Today 10:15", severity: "info", message: "System maintenance completed successfully", resolved: true },
  {
    time: "Yesterday 22:47",
    severity: "warning",
    message: "High memory usage detected on Edge Node 2",
    resolved: true,
  },
  { time: "Yesterday 18:23", severity: "info", message: "Model update deployed to all edge nodes", resolved: true },
]

export default function SystemHealth() {
  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">System Health</h1>
        <p className="text-muted-foreground">Real-time monitoring and status overview</p>
      </div>

      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-medium text-muted-foreground">System Uptime</h3>
          </div>
          <p className="text-2xl font-bold text-primary">99.92%</p>
          <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
        </Card>

        <Card className="p-6 bg-secondary/5 border-secondary/20">
          <div className="flex items-center gap-2 mb-2">
            <Wifi className="w-4 h-4 text-secondary" />
            <h3 className="text-sm font-medium text-muted-foreground">Network Health</h3>
          </div>
          <p className="text-2xl font-bold text-secondary">98.4%</p>
          <p className="text-xs text-muted-foreground mt-1">Avg packet delivery</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-foreground/60" />
            <h3 className="text-sm font-medium text-muted-foreground">Power Status</h3>
          </div>
          <p className="text-2xl font-bold">100%</p>
          <p className="text-xs text-muted-foreground mt-1">Grid + solar backup</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-4 h-4 text-foreground/60" />
            <h3 className="text-sm font-medium text-muted-foreground">Active Alerts</h3>
          </div>
          <p className="text-2xl font-bold">1</p>
          <p className="text-xs text-muted-foreground mt-1">Requires attention</p>
        </Card>
      </div>

      {/* Edge Node Status */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Edge Node Status</h2>
        <div className="space-y-3">
          {edgeNodes.map((node, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{node.name}</h3>
                <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                  <span>Uptime: {node.uptime}%</span>
                  <span>Connectivity: {node.connectivity}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    node.status === "Operational" ? "bg-primary/20 text-primary" : "bg-yellow-500/20 text-yellow-600"
                  }`}
                >
                  {node.status}
                </div>
                <div
                  className={`w-3 h-3 rounded-full ${node.status === "Operational" ? "bg-primary" : "bg-yellow-500"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Alert Log */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Alert Log</h2>
        <div className="space-y-3">
          {alerts.map((alert, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 p-4 rounded-lg ${
                alert.severity === "warning"
                  ? "bg-yellow-500/10 border border-yellow-500/20"
                  : alert.resolved
                    ? "bg-muted border border-border"
                    : "bg-blue-500/10 border border-blue-500/20"
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {alert.severity === "warning" && <AlertCircle className="w-4 h-4 text-yellow-600" />}
                  {alert.severity === "info" && <Activity className="w-4 h-4 text-blue-600" />}
                  <p className="text-sm font-medium">{alert.message}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
              </div>
              {alert.resolved && (
                <div className="px-2 py-1 rounded bg-green-500/20 text-green-700 text-xs font-semibold">Resolved</div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
