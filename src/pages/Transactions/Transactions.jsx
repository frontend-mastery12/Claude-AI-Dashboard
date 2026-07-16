import { useMemo, useState } from 'react'
import PageShell from '../../components/ui/PageShell'
import Card from '../../components/ui/Card'
import { TablePagination } from '../../components/ui/Table'
import SummaryRow from './components/SummaryRow'
import FilterToolbar from './components/FilterToolbar'
import BulkActionsBar from './components/BulkActionsBar'
import DeleteConfirmModal from './components/DeleteConfirmModal'
import UndoBanner from './components/UndoBanner'
import TransactionsTable from './components/TransactionsTable'
import { initialTransactions } from './transactionData'

const PAGE_SIZE = 6

export default function Transactions() {
  // --- Transaction state lives here per context.md's state-ownership rule ---
  const [transactions, setTransactions] = useState(initialTransactions)
  const [selectedIds, setSelectedIds] = useState(new Set())
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [paymentFilter, setPaymentFilter] = useState('All')
  const [page, setPage] = useState(1)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [lastDeleted, setLastDeleted] = useState(null)

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return transactions.filter((t) => {
      const matchesQuery =
        !query || t.member.toLowerCase().includes(query) || t.paymentMethod.toLowerCase().includes(query)
      const matchesStatus = statusFilter === 'All' || t.status === statusFilter
      const matchesPayment = paymentFilter === 'All' || t.paymentMethod === paymentFilter
      return matchesQuery && matchesStatus && matchesPayment
    })
  }, [transactions, search, statusFilter, paymentFilter])

  const pageCount = Math.max(Math.ceil(filtered.length / PAGE_SIZE), 1)
  const currentPage = Math.min(page, pageCount)
  const pageRows = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const totalRevenue = transactions
    .filter((t) => t.status === 'Completed')
    .reduce((sum, t) => sum + t.amount, 0)
  const pendingCount = transactions.filter((t) => t.status === 'Pending').length

  function handleToggleSelect(id) {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function handleToggleAll() {
    setSelectedIds((prev) => {
      const allSelected = pageRows.length > 0 && pageRows.every((row) => prev.has(row.id))
      const next = new Set(prev)
      if (allSelected) {
        pageRows.forEach((row) => next.delete(row.id))
      } else {
        pageRows.forEach((row) => next.add(row.id))
      }
      return next
    })
  }

  function handleClearSelection() {
    setSelectedIds(new Set())
  }

  function handleRequestDelete() {
    setDeleteModalOpen(true)
  }

  function handleConfirmDelete() {
    const removed = transactions.filter((t) => selectedIds.has(t.id))
    setTransactions((prev) => prev.filter((t) => !selectedIds.has(t.id)))
    setLastDeleted(removed)
    setSelectedIds(new Set())
    setDeleteModalOpen(false)
  }

  function handleUndoDelete() {
    if (!lastDeleted) return
    setTransactions((prev) =>
      [...prev, ...lastDeleted].sort((a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id)),
    )
    setLastDeleted(null)
  }

  function handleArchive() {
    // Presentational bulk action per spec; archives selected rows out of the active view.
    setTransactions((prev) => prev.filter((t) => !selectedIds.has(t.id)))
    setSelectedIds(new Set())
  }

  function handleExport() {
    const rows = transactions.filter((t) => selectedIds.has(t.id))
    const header = 'id,date,member,service,paymentMethod,amount,status'
    const csv = [header, ...rows.map((r) => Object.values(r).join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'transactions-export.csv'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <PageShell>
      <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <h1 className="text-2xl font-bold text-white">Transactions</h1>
          <p className="mt-1.5 text-sm text-neutral">
            Manage active gym subscriptions, product sales, and member billings.
          </p>
        </div>
      </div>

      <SummaryRow total={transactions.length} totalRevenue={totalRevenue} pendingCount={pendingCount} />

      <UndoBanner visible={Boolean(lastDeleted)} count={lastDeleted?.length ?? 0} onUndo={handleUndoDelete} />

      <Card noPadding>
        <FilterToolbar
          search={search}
          onSearchChange={(v) => {
            setSearch(v)
            setPage(1)
          }}
          statusFilter={statusFilter}
          onStatusFilterChange={(v) => {
            setStatusFilter(v)
            setPage(1)
          }}
          paymentFilter={paymentFilter}
          onPaymentFilterChange={(v) => {
            setPaymentFilter(v)
            setPage(1)
          }}
        />

        <BulkActionsBar
          selectedCount={selectedIds.size}
          onDelete={handleRequestDelete}
          onArchive={handleArchive}
          onExport={handleExport}
          onClear={handleClearSelection}
        />

        <TransactionsTable
          transactions={pageRows}
          selectedIds={selectedIds}
          onToggleSelect={handleToggleSelect}
          onToggleAll={handleToggleAll}
        />

        <TablePagination
          page={currentPage}
          pageCount={pageCount}
          total={filtered.length}
          pageSize={PAGE_SIZE}
          onPageChange={setPage}
        />
      </Card>

      <DeleteConfirmModal
        open={deleteModalOpen}
        count={selectedIds.size}
        onCancel={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </PageShell>
  )
}
