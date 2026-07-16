import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import ChartPanel, { ChartTooltip } from '../../../components/ui/ChartPanel'
import { classPopularity } from '../analyticsData'

export default function ClassPopularityChart() {
  const total = classPopularity.reduce((sum, c) => sum + c.value, 0)

  return (
    <ChartPanel title="Class Popularity Share" className="h-full">
      <div className="relative -mt-2 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={classPopularity}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="62%"
              outerRadius="90%"
              paddingAngle={3}
              cornerRadius={6}
              stroke="none"
            >
              {classPopularity.map((entry) => (
                <Cell key={entry.key} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<ChartTooltip formatter={(v) => `${Math.round((v / total) * 100)}%`} />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white">{total}%</span>
          <span className="text-[11px] text-neutral">of capacity</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-white/[0.06] pt-4">
        {classPopularity.map((c) => (
          <div key={c.key} className="flex items-center gap-2 text-xs">
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: c.color }} />
            <span className="truncate text-neutral-light">{c.name}</span>
          </div>
        ))}
      </div>
    </ChartPanel>
  )
}
