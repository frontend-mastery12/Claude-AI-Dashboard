import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import Card from '../../../components/ui/Card'
import { ChartTooltip } from '../../../components/ui/ChartPanel'
import { heartRateSeries, heartRateStats } from '../dashboardData'

export default function HeartRateCard() {
  return (
    <Card
      title="Heart rate"
      action={
        <button type="button" className="btn-icon" aria-label="More options">
          <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
            <circle cx="4" cy="10" r="1.4" />
            <circle cx="10" cy="10" r="1.4" />
            <circle cx="16" cy="10" r="1.4" />
          </svg>
        </button>
      }
    >
      <div className="-mx-2 h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={heartRateSeries} margin={{ top: 8, right: 8, bottom: 0, left: 8 }}>
            <defs>
              <linearGradient id="heartRateFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7CFF6B" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#7CFF6B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="t" hide />
            <Tooltip content={<ChartTooltip formatter={(v) => `${v} bpm`} />} cursor={{ stroke: 'rgba(255,255,255,0.12)' }} />
            <Area
              type="monotone"
              dataKey="bpm"
              stroke="#7CFF6B"
              strokeWidth={2.5}
              fill="url(#heartRateFill)"
              name="Heart rate"
              dot={false}
              activeDot={{ r: 4, fill: '#7CFF6B', stroke: '#0A0A0A', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-4">
        {heartRateStats.map((stat) => (
          <div key={stat.key}>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral">{stat.label}</p>
            <p className="mt-1 text-sm font-bold text-white">
              {stat.value} <span className="text-xs font-normal text-neutral">{stat.unit}</span>
            </p>
          </div>
        ))}
      </div>
    </Card>
  )
}
