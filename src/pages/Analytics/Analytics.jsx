import PageShell from '../../components/ui/PageShell'
import KpiRow from './components/KpiRow'
import RevenueExpenseChart from './components/RevenueExpenseChart'
import ClassPopularityChart from './components/ClassPopularityChart'
import SecondaryOperationsRow from './components/SecondaryOperationsRow'

export default function Analytics() {
  return (
    <PageShell>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Analytics Overview</h1>
        <p className="mt-1.5 text-sm text-neutral">
          Track gym performance metrics, monthly business volumes, and distribution metrics.
        </p>
      </div>

      <KpiRow />

      <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueExpenseChart />
        </div>
        <ClassPopularityChart />
      </div>

      <SecondaryOperationsRow />
    </PageShell>
  )
}
