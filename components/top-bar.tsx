"use client"

import { useState, useEffect } from "react"
import { MapPin, Clock } from "lucide-react"

export default function TopBar() {
  const [currentTime, setCurrentTime] = useState("")
  const [city, setCity] = useState("Addis Ababa")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-16 bg-card border-b border-border px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary font-semibold" />
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-background border border-border rounded px-3 py-1 text-sm font-medium cursor-pointer hover:border-primary/50 transition-colors"
          >
            <option>Bole</option>
            <option>Hayahulet</option>
            <option>Mexico</option>
            <option>Megenagna</option>
          </select>
        </div>
        <div className="h-6 w-px bg-border" />
        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-primary/15 border border-primary/30">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary font-semibold">Operational</span>
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{currentTime}</span>
        </div>
        <div className="h-6 w-px bg-border" />
        <div className="text-sm">
          <span className="text-muted-foreground">Role:</span>
          <span className="ml-2 font-medium text-foreground">Traffic Engineer</span>
        </div>
      </div>
    </div>
  )
}
