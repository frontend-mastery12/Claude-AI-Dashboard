import { useState } from 'react'
import { cn } from '../../../utils/cn'
import Card from '../../../components/ui/Card'
import { recommendedActivities } from '../dashboardData'

const ICONS = {
  run: IconRun,
  dumbbell: IconDumbbell,
  body: IconBody,
  stretch: IconStretch,
}

export default function ActivityListCard() {
  const [view, setView] = useState('list')

  return (
    <Card
      title="Recommended activity"
      action={
        <div className="flex items-center gap-1 rounded-xl border border-border-light bg-white/[0.02] p-1">
          <ViewToggle active={view === 'list'} onClick={() => setView('list')} label="List view">
            <IconList className="h-4 w-4" />
          </ViewToggle>
          <ViewToggle active={view === 'grid'} onClick={() => setView('grid')} label="Grid view">
            <IconGrid className="h-4 w-4" />
          </ViewToggle>
        </div>
      }
      bodyClassName="p-3 pt-2"
    >
      <div className={cn(view === 'grid' ? 'grid grid-cols-1 gap-3 sm:grid-cols-2' : 'flex flex-col gap-1.5')}>
        {recommendedActivities.map((activity) => {
          const Icon = ICONS[activity.icon] ?? IconRun
          return (
            <div
              key={activity.id}
              className="flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.03]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-white">{activity.title}</p>
                <p className="text-xs text-neutral">{activity.startLabel}</p>
              </div>
              <div className="hidden shrink-0 text-right sm:block">
                <p className="text-xs text-neutral-light">{activity.time}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-sm font-bold text-white">{activity.price}</p>
              </div>
              <button type="button" className="shrink-0 text-neutral hover:text-white" aria-label="Activity options">
                <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                  <circle cx="10" cy="4" r="1.4" />
                  <circle cx="10" cy="10" r="1.4" />
                  <circle cx="10" cy="16" r="1.4" />
                </svg>
              </button>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

function ViewToggle({ active, onClick, label, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={cn(
        'flex h-7 w-7 items-center justify-center rounded-lg transition-colors',
        active ? 'bg-white/[0.08] text-white' : 'text-neutral hover:text-white',
      )}
    >
      {children}
    </button>
  )
}

function IconList({ className }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 5h9M7 10h9M7 15h9M4 5h.01M4 10h.01M4 15h.01" strokeLinecap="round" />
    </svg>
  )
}

function IconGrid({ className }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="11" y="3" width="6" height="6" rx="1" />
      <rect x="3" y="11" width="6" height="6" rx="1" />
      <rect x="11" y="11" width="6" height="6" rx="1" />
    </svg>
  )
}

function IconRun({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="15.5" cy="5" r="1.6" />
      <path
        d="M12 21l1.6-4.6-2-1.7.6-4 2 1.8 1 2.7 3 1.2M9 21l2-4-3-2.8L6 16l-2.5 1.5M13.4 10.2 10 9l-3 1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconDumbbell({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 10v4M20 10v4M6.5 8v8M17.5 8v8M9 12h6" strokeLinecap="round" />
    </svg>
  )
}

function IconBody({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="4.5" r="1.8" />
      <path d="M7 9.5 12 8l5 1.5-1 4-1.5-1V21h-5v-8.5L8 13l-1-3.5Z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

function IconStretch({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="8" cy="4.5" r="1.6" />
      <path d="M4 9l4-1.5 4 2 4-2 4 1.5M8 9.5V21M12 12l4 3v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
