import Table from '../../../components/ui/Table'
import Badge, { statusToTone } from '../../../components/ui/Badge'

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' })

function formatDate(isoDate) {
  return dateFormatter.format(new Date(`${isoDate}T00:00:00`))
}

export default function TransactionsTable({ transactions, selectedIds, onToggleSelect, onToggleAll }) {
  const columns = [
    {
      key: 'date',
      header: 'Date',
      render: (row) => <span className="text-neutral">{formatDate(row.date)}</span>,
    },
    {
      key: 'member',
      header: 'Member & Product',
      render: (row) => (
        <div>
          <p className="font-semibold text-white">{row.member}</p>
          <p className="text-xs text-neutral">{row.service}</p>
        </div>
      ),
    },
    {
      key: 'paymentMethod',
      header: 'Payment Method',
    },
    {
      key: 'amount',
      header: 'Amount',
      align: 'right',
      render: (row) => <span className="font-semibold text-white">{currency.format(row.amount)}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      render: (row) => <Badge tone={statusToTone(row.status)}>{row.status}</Badge>,
    },
  ]

  return (
    <Table
      columns={columns}
      data={transactions}
      selectable
      selectedIds={selectedIds}
      onToggleRow={onToggleSelect}
      onToggleAll={onToggleAll}
      emptyLabel="No transactions match your filters."
    />
  )
}
