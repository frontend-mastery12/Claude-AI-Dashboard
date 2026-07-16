import MetricTile from '../../../components/ui/MetricTile'
import { analyticsKpis } from '../analyticsData'

export default function KpiRow() {
  return (
    <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {analyticsKpis.map((kpi) => (
        <MetricTile
          key={kpi.key}
          label={kpi.label}
          value={kpi.value}
          trend={kpi.trend}
          trendDirection={kpi.trendDirection}
        />
      ))}
    </div>
  )
}
