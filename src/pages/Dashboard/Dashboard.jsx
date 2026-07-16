import PageShell from '../../components/ui/PageShell'
import OverviewHeader from './components/OverviewHeader'
import BodyProgressCard from './components/BodyProgressCard'
import HeartRateCard from './components/HeartRateCard'
import GoalBuildingCard from './components/GoalBuildingCard'
import ActivityListCard from './components/ActivityListCard'
import TrainerCard from './components/TrainerCard'

export default function Dashboard() {
  return (
    <PageShell>
      <OverviewHeader />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <BodyProgressCard />
        <HeartRateCard />
        <GoalBuildingCard />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ActivityListCard />
        </div>
        <TrainerCard />
      </div>
    </PageShell>
  )
}
