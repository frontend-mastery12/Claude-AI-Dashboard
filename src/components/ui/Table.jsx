import { cn } from '../../utils/cn'

/**
 * Table
 * Generic dark-theme data table.
 *
 * Props:
 * - columns: [{ key, header, align?, render?(row) }]
 * - data: array of row objects (must include an `id` field)
 * - selectable: enables the leading checkbox column
 * - selectedIds: Set of currently selected row ids
 * - onToggleRow(id): called when a row checkbox is toggled
 * - onToggleAll(): called when the header checkbox is toggled
 * - rowClassName(row): optional extra classes per row
 */
export default function Table({
  columns,
  data,
  selectable = false,
  selectedIds,
  onToggleRow,
  onToggleAll,
  rowClassName,
  emptyLabel = 'No records found.',
}) {
  const allSelected = selectable && data.length > 0 && data.every((row) => selectedIds?.has(row.id))

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr className="border-b border-white/[0.07]">
            {selectable && (
              <th className="w-12 px-6 py-3.5">
                <Checkbox checked={allSelected} onChange={onToggleAll} ariaLabel="Select all rows" />
              </th>
            )}
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  'px-6 py-3.5 text-[11px] font-semibold uppercase tracking-wider text-neutral',
                  col.align === 'right' && 'text-right',
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (selectable ? 1 : 0)}
                className="px-6 py-12 text-center text-sm text-neutral"
              >
                {emptyLabel}
              </td>
            </tr>
          ) : (
            data.map((row) => {
              const isSelected = selectable && selectedIds?.has(row.id)
              return (
                <tr
                  key={row.id}
                  className={cn('table-row', isSelected && 'selected', rowClassName?.(row))}
                >
                  {selectable && (
                    <td className="px-6 py-4">
                      <Checkbox
                        checked={isSelected}
                        onChange={() => onToggleRow?.(row.id)}
                        ariaLabel={`Select row ${row.id}`}
                      />
                    </td>
                  )}
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={cn(
                        'px-6 py-4 text-sm text-neutral-light',
                        col.align === 'right' && 'text-right',
                      )}
                    >
                      {col.render ? col.render(row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )
}

function Checkbox({ checked, onChange, ariaLabel }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={onChange}
      className={cn(
        'flex h-[18px] w-[18px] items-center justify-center rounded-md border transition-all duration-150 focus-visible:outline-accent',
        checked ? 'border-accent bg-accent' : 'border-border-light bg-white/[0.02] hover:border-white/30',
      )}
    >
      {checked && (
        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-none stroke-black stroke-[2.5]">
          <path d="M2 6.2 4.8 9 10 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}

/**
 * TablePagination
 * Compact footer summarizing the current page of results.
 */
export function TablePagination({ page, pageCount, total, pageSize, onPageChange }) {
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1
  const end = Math.min(page * pageSize, total)

  return (
    <div className="flex items-center justify-between border-t border-white/[0.06] px-6 py-4">
      <p className="text-xs text-neutral">
        Showing <span className="text-neutral-light">{start}-{end}</span> of{' '}
        <span className="text-neutral-light">{total}</span> transactions
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="btn-icon disabled:opacity-30"
          aria-label="Previous page"
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-2">
            <path d="M12.5 15 7.5 10l5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="text-xs font-medium text-neutral-light">
          Page {page} of {Math.max(pageCount, 1)}
        </span>
        <button
          type="button"
          disabled={page >= pageCount}
          onClick={() => onPageChange(page + 1)}
          className="btn-icon disabled:opacity-30"
          aria-label="Next page"
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-2">
            <path d="M7.5 15l5-5-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
