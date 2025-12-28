import { Cloud, Grid3x3, Zap } from "lucide-react"

export default function ArchitecturePanel() {
  return (
    <div className="bg-card rounded-lg border border-border p-4 space-y-4">
      <h2 className="text-lg font-bold">Architecture Overview</h2>

      <div className="space-y-3">
        {/* Edge Layer */}
        <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <Grid3x3 className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-sm">Edge Layer</h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Distributed sensors and edge nodes process real-time data with sub-second latency.
          </p>
        </div>

        {/* Cloud Layer */}
        <div className="bg-secondary/10 rounded-lg p-3 border border-secondary/20">
          <div className="flex items-center gap-2 mb-2">
            <Cloud className="w-4 h-4 text-secondary" />
            <h3 className="font-semibold text-sm">Cloud Layer</h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Centralized analytics, model training, and long-term data aggregation.
          </p>
        </div>

        {/* Communication */}
        <div className="bg-muted rounded-lg p-3 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-foreground/60" />
            <h3 className="font-semibold text-sm">Split Architecture</h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Intelligent workload distribution ensures resilience and optimal performance.
          </p>
        </div>
      </div>
    </div>
  )
}
