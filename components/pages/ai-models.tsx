"use client"

import { Card } from "@/components/ui/card"
import { Brain, TrendingUp, Zap } from "lucide-react"

const models = [
  {
    name: "Traffic Forecasting",
    type: "LSTM / GNN",
    purpose: "Predict traffic volume and congestion 30-60 minutes ahead",
    inputs: ["Historical volume", "Weather data", "Event data"],
    outputs: "Volume forecast, Congestion prediction",
    accuracy: "94.2%",
    placement: "Cloud",
    placementReason: "Requires historical data aggregation and model training",
  },
  {
    name: "Signal Control",
    type: "Reinforcement Learning",
    purpose: "Optimize traffic signal timing in real-time",
    inputs: ["Current vehicle counts", "Queue lengths", "Wait times"],
    outputs: "Signal timing decisions",
    accuracy: "18% delay reduction",
    placement: "Edge",
    placementReason: "Sub-second latency requirements for real-time control",
  },
  {
    name: "Incident Detection",
    type: "CNN / Computer Vision",
    purpose: "Detect accidents, stalled vehicles, and anomalies",
    inputs: ["Camera feeds", "Sensor data", "Traffic patterns"],
    outputs: "Incident alerts, Severity classification",
    accuracy: "96.8%",
    placement: "Edge",
    placementReason: "Fast response needed for emergency situations",
  },
]

export default function AIModels() {
  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">AI Models</h1>
        <p className="text-muted-foreground">Understand our intelligent decision-making systems</p>
      </div>

      <div className="grid gap-6">
        {models.map((model, idx) => (
          <Card key={idx} className="p-6 border-2 border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  {model.name}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">{model.type}</p>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  model.placement === "Edge" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                }`}
              >
                {model.placement}
              </div>
            </div>

            <p className="text-foreground mb-4">{model.purpose}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-semibold text-sm mb-2">Inputs</h3>
                <ul className="space-y-1">
                  {model.inputs.map((input, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      • {input}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-semibold text-sm mb-2">Outputs</h3>
                <p className="text-sm text-muted-foreground">{model.outputs}</p>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-4 mb-4 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-sm">Performance</h3>
              </div>
              <p className="text-2xl font-bold text-primary">{model.accuracy}</p>
            </div>

            <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-secondary" />
                <h3 className="font-semibold text-sm">Deployment Strategy</h3>
              </div>
              <p className="text-sm text-muted-foreground">{model.placementReason}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
