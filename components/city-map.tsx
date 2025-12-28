"use client"

import { useEffect, useRef } from "react"

export default function CityMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const width = canvas.width
    const height = canvas.height

    // Draw background
    ctx.fillStyle = "#f8f9fa"
    ctx.fillRect(0, 0, width, height)

    // Draw grid
    ctx.strokeStyle = "#e0e0e0"
    ctx.lineWidth = 1
    for (let i = 0; i < width; i += 40) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, height)
      ctx.stroke()
    }
    for (let i = 0; i < height; i += 40) {
      ctx.beginPath()
      ctx.moveTo(0, i)
      ctx.lineTo(width, i)
      ctx.stroke()
    }

    // Draw roads
    ctx.strokeStyle = "#999"
    ctx.lineWidth = 3
    // Horizontal road
    ctx.beginPath()
    ctx.moveTo(0, height / 2)
    ctx.lineTo(width, height / 2)
    ctx.stroke()
    // Vertical road
    ctx.beginPath()
    ctx.moveTo(width / 2, 0)
    ctx.lineTo(width / 2, height)
    ctx.stroke()

    // Draw intersections
    const intersections = [
      { x: width / 2, y: height / 2 },
      { x: width / 3, y: height / 2 },
      { x: (2 * width) / 3, y: height / 2 },
      { x: width / 2, y: height / 3 },
      { x: width / 2, y: (2 * height) / 3 },
    ]

    intersections.forEach((intersection, idx) => {
      // Draw intersection circle
      ctx.fillStyle = idx === 0 ? "#22c55e" : "#3b82f6"
      ctx.beginPath()
      ctx.arc(intersection.x, intersection.y, 8, 0, Math.PI * 2)
      ctx.fill()

      // Draw outer ring
      ctx.strokeStyle = idx === 0 ? "#22c55e" : "#3b82f6"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(intersection.x, intersection.y, 12, 0, Math.PI * 2)
      ctx.stroke()

      // Animate pulse
      ctx.strokeStyle = (idx === 0 ? "#22c55e" : "#3b82f6") + "40"
      ctx.lineWidth = 1
      const time = Date.now() / 500
      const radius = 15 + Math.sin(time + idx) * 5
      ctx.beginPath()
      ctx.arc(intersection.x, intersection.y, radius, 0, Math.PI * 2)
      ctx.stroke()
    })

    // Label intersections
    ctx.fillStyle = "#333"
    ctx.font = "12px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "top"
    intersections.forEach((intersection, idx) => {
      ctx.fillText(`I-${idx + 1}`, intersection.x, intersection.y + 18)
    })
  }, [])

  return (
    <div className="bg-card rounded-lg border border-border p-4">
      <h2 className="text-lg font-bold mb-4">City Traffic Map</h2>
      <canvas ref={canvasRef} className="w-full h-80 rounded border border-border" />
      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-muted-foreground">Critical</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <span className="text-muted-foreground">Normal</span>
          </div>
        </div>
        <span className="text-muted-foreground">5 Intersections Monitored</span>
      </div>
    </div>
  )
}
