/**
 * PageShell
 * Wraps route-level page content with the consistent spacing used
 * across Dashboard, Analytics, and Transactions.
 */
export default function PageShell({ children }) {
  return <div className="px-6 py-8 lg:px-10 lg:py-9">{children}</div>
}
