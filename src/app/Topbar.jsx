import { useState } from 'react'
import { cn } from '../utils/cn'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

export default function Topbar() {
  const [isDark, setIsDark] = useState(true)

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/[0.06] bg-[#0A0A0A]/85 px-6 py-4 backdrop-blur lg:px-10">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral">
          {getGreeting()}
        </p>
        <h1 className="text-lg font-bold text-white">Welcome Back !</h1>
      </div>

      <div className="flex items-center gap-2">
        <button type="button" className="btn-icon" aria-label="Search">
          <svg viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-2">
            <circle cx="9" cy="9" r="6" />
            <path d="m17 17-4-4" strokeLinecap="round" />
          </svg>
        </button>

        <button type="button" className="btn-icon" aria-label="Messages">
          <svg viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-2">
            <path
              d="M3 5.5A1.5 1.5 0 0 1 4.5 4h11A1.5 1.5 0 0 1 17 5.5v6A1.5 1.5 0 0 1 15.5 13H9l-3.5 3v-3H4.5A1.5 1.5 0 0 1 3 11.5v-6Z"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button type="button" className="btn-icon relative" aria-label="Notifications, 2 unread">
          <svg viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-2">
            <path
              d="M5 8a5 5 0 0 1 10 0c0 3 1 4 1 4H4s1-1 1-4Z"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path d="M8.5 15a1.7 1.7 0 0 0 3 0" strokeLinecap="round" />
          </svg>
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-black">
            2
          </span>
        </button>

        <div className="ml-1 flex items-center gap-1 rounded-xl border border-border-light bg-white/[0.02] p-1">
          <button
            type="button"
            onClick={() => setIsDark(false)}
            aria-label="Light mode"
            aria-pressed={!isDark}
            className={cn(
              'flex h-7 w-7 items-center justify-center rounded-lg transition-colors',
              !isDark ? 'bg-accent text-black' : 'text-neutral hover:text-white',
            )}
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
              <circle cx="10" cy="10" r="3.5" />
              <path
                d="M10 2.5v1.6M10 15.9v1.6M17.5 10h-1.6M4.1 10H2.5M15.1 4.9l-1.2 1.2M6.1 13.9l-1.2 1.2M15.1 15.1l-1.2-1.2M6.1 6.1 4.9 4.9"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setIsDark(true)}
            aria-label="Dark mode"
            aria-pressed={isDark}
            className={cn(
              'flex h-7 w-7 items-center justify-center rounded-lg transition-colors',
              isDark ? 'bg-accent text-black' : 'text-neutral hover:text-white',
            )}
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
              <path d="M14.5 12.4A6.5 6.5 0 0 1 7.6 5.5a.6.6 0 0 0-.8-.7 7.5 7.5 0 1 0 8.4 8.4.6.6 0 0 0-.7-.8Z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
