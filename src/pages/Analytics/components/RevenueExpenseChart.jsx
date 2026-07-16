import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import ChartPanel, { ChartTooltip } from '../../../components/ui/ChartPanel'
import { revenueExpenseSeries } from '../analyticsData'

const currencyCompact = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
  maximumFractionDigits: 0,
})

export default function RevenueExpenseChart() {
  return (
    <ChartPanel
      title="Revenue vs Operational Expenses"
      action={<span className="text-xs font-medium text-neutral">H1 2026 Metrics</span>}
      className="h-full"
    >
      <div className="flex items-center gap-5 pb-4">
        <Legend swatchClass="bg-accent" label="Revenue" />
        <Legend swatchClass="bg-danger" label="Expenses" dashed />
      </div>
      <div className="-mx-2 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueExpenseSeries} margin={{ top: 4, right: 12, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 6" stroke="rgba(255,255,255,0.06)" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => currencyCompact.format(v).replace('$', '')}
              width={44}
            />
            <Tooltip
              content={<ChartTooltip formatter={(v) => currencyCompact.format(v)} />}
              cursor={{ stroke: 'rgba(255,255,255,0.12)' }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="#7CFF6B"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 4, fill: '#7CFF6B', stroke: '#0A0A0A', strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="expenses"
              name="Expenses"
              stroke="#FF5C5C"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={false}
              activeDot={{ r: 4, fill: '#FF5C5C', stroke: '#0A0A0A', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartPanel>
  )
}

function Legend({ swatchClass, label, dashed }) {
  return (
    <div className="flex items-center gap-2 text-xs text-neutral">
      <span className={`h-2 w-2 rounded-full ${swatchClass} ${dashed ? 'opacity-80' : ''}`} />
      {label}
    </div>
  )
}
