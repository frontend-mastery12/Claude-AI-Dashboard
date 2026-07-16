import { cn } from '../../utils/cn'

const TONE_CLASS = {
  success: 'chip-success',
  warning: 'chip-warning',
  danger: 'chip-danger',
  neutral: 'chip-neutral',
}

const TONE_DOT = {
  success: 'bg-accent',
  warning: 'bg-warning',
  danger: 'bg-danger',
  neutral: 'bg-neutral',
}

/**
 * Badge
 * Small status chip. tone: 'success' | 'warning' | 'danger' | 'neutral'
 * dot: show a small leading dot indicator (default true)
 */
export default function Badge({ tone = 'neutral', dot = true, className, children }) {
  return (
    <span className={cn(TONE_CLASS[tone] ?? TONE_CLASS.neutral, className)}>
      {dot && <span className={cn('h-1.5 w-1.5 rounded-full', TONE_DOT[tone] ?? TONE_DOT.neutral)} />}
      {children}
    </span>
  )
}

/**
 * Maps common transaction/status strings to a Badge tone automatically.
 */
export function statusToTone(status) {
  const s = String(status).toLowerCase()
  if (['completed', 'success', 'active', 'paid'].includes(s)) return 'success'
  if (['pending', 'processing', 'trial'].includes(s)) return 'warning'
  if (['failed', 'declined', 'cancelled', 'canceled', 'overdue'].includes(s)) return 'danger'
  return 'neutral'
}
