import SearchBar from '../../../components/shared/SearchBar'
import { cn } from '../../../utils/cn'
import { STATUS_FILTERS, PAYMENT_METHODS } from '../transactionData'

export default function FilterToolbar({
  search,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  paymentFilter,
  onPaymentFilterChange,
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-white/[0.06] px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        {STATUS_FILTERS.map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => onStatusFilterChange(status)}
            className={cn(
              'rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors',
              statusFilter === status
                ? 'bg-accent text-black'
                : 'bg-white/[0.03] text-neutral hover:bg-white/[0.07] hover:text-white',
            )}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <select
          value={paymentFilter}
          onChange={(e) => onPaymentFilterChange(e.target.value)}
          className="rounded-xl border border-border-light bg-white/[0.03] px-3.5 py-2.5 text-xs font-medium text-neutral-light outline-none transition-colors focus:border-accent/50"
          aria-label="Filter by payment method"
        >
          {PAYMENT_METHODS.map((method) => (
            <option key={method} value={method} className="bg-surface">
              {method === 'All' ? 'All payment methods' : method}
            </option>
          ))}
        </select>

        <SearchBar
          value={search}
          onChange={onSearchChange}
          placeholder="Search member or payment..."
          className="w-full sm:w-72"
        />
      </div>
    </div>
  )
}
