const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

export default function SummaryRow({ total, totalRevenue, pendingCount }) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div className="metric-card">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral">Total Transactions</p>
        <p className="mt-3 text-[28px] font-bold leading-none text-white">
          {total} <span className="text-sm font-semibold text-accent">Recorded</span>
        </p>
      </div>
      <div className="metric-card">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral">Total Revenue</p>
        <p className="mt-3 text-[28px] font-bold leading-none text-white">
          {currency.format(totalRevenue)} <span className="text-sm font-medium text-neutral">Gross Sales</span>
        </p>
      </div>
      <div className="metric-card">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral">Pending Orders</p>
        <p className="mt-3 text-[28px] font-bold leading-none text-white">
          {pendingCount} <span className="text-sm font-medium text-warning">Needs Clearance</span>
        </p>
      </div>
    </div>
  )
}
