import { NavLink } from 'react-router-dom'
import { cn } from '../utils/cn'

const MAIN_NAV = [
  { to: '/', label: 'Dashboard', icon: IconGrid, end: true },
  { to: '/analytics', label: 'Analytics', icon: IconMonitor },
  { to: '/goals', label: 'Goals', icon: IconTarget },
  { to: '/transactions', label: 'Transactions', icon: IconSwap },
]

const SETTINGS_NAV = [
  { to: '/settings', label: 'Settings', icon: IconGear },
  { to: '/appearance', label: 'Appearance', icon: IconPaint },
  { to: '/support', label: 'Support', icon: IconHelp },
]

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-[260px] flex-col border-r border-white/[0.06] bg-[#0A0A0A] px-4 py-5 lg:flex">
      {/* Brand / profile */}
      <div className="flex items-center gap-3 rounded-xl px-1.5 py-1.5">
        <img
          src="https://i.pravatar.cc/80?img=13"
          alt="Michael Brown"
          className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">Michael Brown</p>
          <p className="truncate text-xs text-neutral">@Michaelbrown09</p>
        </div>
        <span className="chip bg-accent text-black">PRO</span>
      </div>

      {/* Main menu */}
      <nav className="mt-8 flex-1 overflow-y-auto">
        <div className="flex items-center justify-between px-1.5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral">Main Menu</p>
          <IconSparkle className="h-3.5 w-3.5 text-neutral" />
        </div>
        <div className="mt-3 flex flex-col gap-1">
          {MAIN_NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => cn('nav-item', isActive && 'active')}
            >
              <item.icon className="nav-icon h-[18px] w-[18px] shrink-0" />
              {item.label}
            </NavLink>
          ))}
        </div>

        <p className="mt-7 px-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral">
          Settings &amp; Help
        </p>
        <div className="mt-3 flex flex-col gap-1">
          {SETTINGS_NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => cn('nav-item', isActive && 'active')}
            >
              <item.icon className="nav-icon h-[18px] w-[18px] shrink-0" />
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Community card */}
      <div className="panel mt-4 p-4">
        <div className="flex -space-x-2.5">
          <img
            src="https://i.pravatar.cc/64?img=32"
            alt=""
            className="h-8 w-8 rounded-full ring-2 ring-surface object-cover"
          />
          <img
            src="https://i.pravatar.cc/64?img=47"
            alt=""
            className="h-8 w-8 rounded-full ring-2 ring-surface object-cover"
          />
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-black ring-2 ring-surface">
            +
          </span>
        </div>
        <p className="mt-3 text-sm font-medium text-neutral-light">
          Join the community and find out more
        </p>
      </div>
    </aside>
  )
}

/* --- Inline icon set (stroke-based, currentColor) --- */

function IconGrid({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </svg>
  )
}

function IconMonitor({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4.5" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16.5V20" strokeLinecap="round" />
    </svg>
  )
}

function IconTarget({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" />
    </svg>
  )
}

function IconSwap({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 8h13l-3.5-3.5M20 16H7l3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconGear({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3" />
      <path
        d="M19.4 13a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V19a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 13a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 6.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06A2 2 0 1 1 7.03 2.14l.06.06A1.7 1.7 0 0 0 8.96 2.5H9a1.7 1.7 0 0 0 1-1.55V1"
        opacity="0"
      />
      <path d="M4.6 15a1.7 1.7 0 0 0-.34 1.87M19.4 9a1.7 1.7 0 0 1 .34-1.87" strokeLinecap="round" />
      <path
        d="M12 2.5v2M12 19.5v2M4.2 5.2l1.4 1.4M18.4 17.4l1.4 1.4M2 12h2M20 12h2M4.2 18.8l1.4-1.4M18.4 6.6l1.4-1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconPaint({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 15c0-4 3-9 8-11 1 3-1 4-1 7 3 0 5-1 6-3 2 3 1 8-3 10-4 2-9 1-10-3Z" strokeLinejoin="round" />
      <circle cx="8.5" cy="17.5" r="2" />
    </svg>
  )
}

function IconHelp({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.2a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .8-1 1.7" strokeLinecap="round" />
      <circle cx="12" cy="16.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconSparkle({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2l1.8 5.6L19.4 9l-5.6 1.8L12 16l-1.8-5.2L4.6 9l5.6-1.4L12 2Z" />
    </svg>
  )
}
