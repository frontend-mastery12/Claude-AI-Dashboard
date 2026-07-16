import { overviewStats } from '../dashboardData'

export default function OverviewHeader() {
  return (
    <div className="mb-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral">Overview</p>
        <h1 className="text-2xl font-bold text-white">Welcome Back !</h1>
      </div>

      <div className="flex flex-wrap gap-x-8 gap-y-3">
        {overviewStats.map((stat) => (
          <div key={stat.key} className="text-right">
            <p className="text-[11px] font-medium text-neutral">{stat.label}</p>
            <p className="text-base font-bold text-white">
              {stat.value} <span className="text-xs font-medium text-neutral">{stat.unit}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
