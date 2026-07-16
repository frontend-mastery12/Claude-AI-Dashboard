import Card from '../../../components/ui/Card'
import { trainers } from '../dashboardData'

export default function TrainerCard() {
  return (
    <Card
      title="Trainer"
      action={
        <button type="button" className="btn-icon" aria-label="See all trainers">
          <svg viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-2">
            <path d="M7 13 13 7M8 7h5v5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      }
      bodyClassName="p-4 pt-2"
    >
      <div className="grid grid-cols-3 gap-3">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="group overflow-hidden rounded-xl bg-white/[0.03]">
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img
                src={trainer.photo}
                alt={trainer.name}
                className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
              />
            </div>
            <div className="p-2.5">
              <p className="truncate text-xs font-semibold text-white">{trainer.name}</p>
              <p className="truncate text-[11px] text-neutral">{trainer.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
