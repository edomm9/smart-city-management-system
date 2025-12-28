"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef } from "react"

export default function EdgeArchitecture() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const width = canvas.width
    const height = canvas.height

    // Draw background
    ctx.fillStyle = "#f8f9fa"
    ctx.fillRect(0, 0, width, height)

    // Draw sensors at bottom
    const sensorY = height - 80
    const sensors = [
      { x: width * 0.1, label: "Camera" },
      { x: width * 0.3, label: "Acoustic" },
      { x: width * 0.5, label: "Radar" },
      { x: width * 0.7, label: "Inductive Loop" },
      { x: width * 0.9, label: "LiDAR" },
    ]

    // Draw sensors
    ctx.fillStyle = "#3b82f6"
    sensors.forEach((sensor) => {
      ctx.fillRect(sensor.x - 15, sensorY - 15, 30, 30)
      ctx.fillStyle = "#ffffff"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("S", sensor.x, sensorY - 8)
      ctx.fillStyle = "#3b82f6"
    })

    // Draw sensor labels
    ctx.fillStyle = "#666"
    ctx.font = "11px sans-serif"
    sensors.forEach((sensor) => {
      ctx.textAlign = "center"
      ctx.fillText(sensor.label, sensor.x, sensorY + 30)
    })

    // Draw edge nodes in middle
    const edgeY = height / 2
    const edgeNodes = [
      { x: width * 0.25, label: "Edge Node 1" },
      { x: width * 0.5, label: "Edge Node 2" },
      { x: width * 0.75, label: "Edge Node 3" },
    ]

    // Draw data flow arrows from sensors to edge
    ctx.strokeStyle = "#22c55e"
    ctx.lineWidth = 2
    sensors.forEach((sensor) => {
      const targetX = edgeNodes[Math.floor((sensor.x / width) * 3)].x
      ctx.beginPath()
      ctx.moveTo(sensor.x, sensorY - 15)
      ctx.lineTo(targetX, edgeY + 25)
      ctx.stroke()

      // Arrow head
      const angle = Math.atan2(edgeY + 25 - (sensorY - 15), targetX - sensor.x)
      ctx.beginPath()
      ctx.moveTo(targetX, edgeY + 25)
      ctx.lineTo(targetX - 8 * Math.cos(angle - Math.PI / 6), edgeY + 25 - 8 * Math.sin(angle - Math.PI / 6))
      ctx.lineTo(targetX - 8 * Math.cos(angle + Math.PI / 6), edgeY + 25 - 8 * Math.sin(angle + Math.PI / 6))
      ctx.closePath()
      ctx.fill()
    })

    // Draw edge nodes
    ctx.fillStyle = "#22c55e"
    edgeNodes.forEach((node) => {
      ctx.fillRect(node.x - 25, edgeY - 20, 50, 40)
    })

    // Draw edge node labels
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 12px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    edgeNodes.forEach((node) => {
      ctx.fillText("EN", node.x, edgeY)
    })

    // Draw cloud at top
    const cloudX = width / 2
    const cloudY = 60
    ctx.fillStyle = "#60a5fa"
    ctx.beginPath()
    ctx.ellipse(cloudX, cloudY, 80, 40, 0, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 14px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("Cloud", cloudX, cloudY - 5)
    ctx.fillText("Analytics", cloudX, cloudY + 10)

    // Draw data flow arrows from edge to cloud
    ctx.strokeStyle = "#60a5fa"
    ctx.lineWidth = 2
    edgeNodes.forEach((node) => {
      ctx.beginPath()
      ctx.moveTo(node.x, edgeY - 20)
      ctx.lineTo(cloudX, cloudY + 40)
      ctx.stroke()
    })

    // Draw latency comparison boxes
    const boxY = height - 30
    const boxWidth = 150

    // Edge latency
    ctx.fillStyle = "#22c55e"
    ctx.fillRect(width * 0.1, boxY - 30, boxWidth, 30)
    ctx.fillStyle = "#ffffff"
    ctx.font = "11px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("Edge: 50ms", width * 0.1 + boxWidth / 2, boxY - 15)

    // Cloud latency
    ctx.fillStyle = "#ef4444"
    ctx.fillRect(width * 0.75 - boxWidth, boxY - 30, boxWidth, 30)
    ctx.fillStyle = "#ffffff"
    ctx.fillText("Cloud: 200ms", width * 0.75 - boxWidth / 2, boxY - 15)
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Edge Architecture</h1>
        <p className="text-muted-foreground">System topology and data flow visualization</p>
      </div>

      {/* Architecture Diagram */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">System Architecture Diagram</h2>
        <canvas ref={canvasRef} className="w-full h-96 rounded border border-border" />
      </Card>

      {/* Architecture Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-primary/5 border-primary/20">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            Edge Nodes
          </h3>
          <ul className="space-y-2 text-sm">
            <li>• Real-time signal control</li>
            <li>• Incident detection</li>
            <li>• Sub-second latency processing</li>
            <li>• Offline operation capability</li>
            <li>• Local caching and buffering</li>
          </ul>
        </Card>

        <Card className="p-6 bg-secondary/5 border-secondary/20">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            Cloud Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>• ML model training</li>
            <li>• Long-term analytics</li>
            <li>• Data aggregation</li>
            <li>• System orchestration</li>
            <li>• API and reporting</li>
          </ul>
        </Card>
      </div>

      {/* Resilience */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Resilience & Failover</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-muted rounded-lg p-4">
            <h3 className="font-semibold mb-2">Network Failure</h3>
            <p className="text-sm text-muted-foreground">
              Edge nodes continue operating independently with cached models and local decision-making.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h3 className="font-semibold mb-2">Edge Node Failure</h3>
            <p className="text-sm text-muted-foreground">
              Neighboring edge nodes assume signal control responsibilities with automated failover.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h3 className="font-semibold mb-2">Cloud Outage</h3>
            <p className="text-sm text-muted-foreground">
              System operates in degraded mode with edge-based analytics until connection restored.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
