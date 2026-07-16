import Card from '../../../components/ui/Card'
import { fitnessGoals } from '../dashboardData'

export default function GoalBuildingCard() {
  return (
    <Card title="Fitness Goal Building" bodyClassName="p-4 pt-2">
      <div className="flex flex-col gap-2">
        {fitnessGoals.map((goal) => (
          <div
            key={goal.id}
            className="flex items-center gap-3 rounded-xl border border-transparent px-2 py-2.5 transition-colors hover:border-white/[0.06] hover:bg-white/[0.02]"
          >
            <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-xl bg-white/[0.04] text-white">
              <span className="text-sm font-bold leading-none">{goal.count}</span>
              <span className="text-[9px] font-semibold uppercase tracking-wide text-neutral">{goal.unit}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">{goal.title}</p>
              <p className="text-xs text-neutral">{goal.frequency}</p>
            </div>
            <span className="chip-success shrink-0">{goal.progress}%</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
