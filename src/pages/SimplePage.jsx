import PageShell from '../components/ui/PageShell'
import Card from '../components/ui/Card'

/**
 * SimplePage
 * Minimal, on-brand page shell for sidebar destinations that sit
 * outside the three core modules (Dashboard, Transactions, Analytics)
 * defined in the product spec.
 */
export default function SimplePage({ title, subtitle }) {
  return (
    <PageShell>
      <div className="mb-7">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="mt-1.5 text-sm text-neutral">{subtitle}</p>
      </div>
      <Card className="flex flex-col items-center justify-center gap-3 px-6 py-20 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
            <path d="M12 8v5M12 16h.01" strokeLinecap="round" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        </div>
        <p className="text-sm font-medium text-neutral-light">This module is being built out.</p>
        <p className="max-w-xs text-xs text-neutral">
          {title} will follow the same dark, data-forward system used across Dashboard, Analytics, and
          Transactions.
        </p>
      </Card>
    </PageShell>
  )
}
