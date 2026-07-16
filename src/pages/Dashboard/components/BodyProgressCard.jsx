import Card from '../../../components/ui/Card'
import Button from '../../../components/ui/Button'
import { bodyProgress } from '../dashboardData'

const SIZE = 168
const STROKE = 14
const RADIUS = (SIZE - STROKE) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function BodyProgressCard() {
  const offset = CIRCUMFERENCE * (1 - bodyProgress.percent / 100)

  return (
    <Card className="flex flex-col">
      <div className="flex flex-1 items-center gap-6">
        <div className="relative shrink-0" style={{ width: SIZE, height: SIZE }}>
          <svg width={SIZE} height={SIZE} className="-rotate-90">
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={STROKE}
            />
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke="#7CFF6B"
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
              style={{ filter: 'drop-shadow(0 0 6px rgba(124,255,107,0.45))' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">{bodyProgress.percent}%</span>
            <span className="mt-1 text-xs text-neutral">{bodyProgress.label}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {bodyProgress.metrics.map((m) => (
            <div key={m.key}>
              <div className="flex items-center gap-2 text-sm text-neutral-light">
                <span className={`h-2 w-2 rounded-full ${m.dotClass}`} />
                {m.label}
              </div>
              <div className="mt-0.5 flex items-baseline gap-2 pl-4">
                <span className="text-sm font-bold text-white">{m.value}</span>
                <span className="text-xs text-neutral">~ {m.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button variant="secondary" className="mt-6 w-full justify-center">
        View full details
      </Button>
    </Card>
  )
}
