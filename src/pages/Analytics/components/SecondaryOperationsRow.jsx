import { secondaryOperations } from '../analyticsData'

export default function SecondaryOperationsRow() {
  return (
    <div>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-neutral">
        Secondary Operations
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {secondaryOperations.map((op) => (
          <div key={op.key} className="metric-card flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">{op.label}</p>
              <p className="mt-1.5 text-sm text-neutral">{op.caption}</p>
            </div>
            <p className="shrink-0 text-2xl font-bold text-white">
              {op.value} <span className="text-sm font-medium text-neutral">{op.suffix}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
