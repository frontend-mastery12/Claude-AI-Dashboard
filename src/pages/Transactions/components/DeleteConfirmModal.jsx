import Button from '../../../components/ui/Button'

export default function DeleteConfirmModal({ open, count, onCancel, onConfirm }) {
  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
    >
      <div className="panel w-full max-w-sm p-6 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.8)]">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-danger/15 text-danger">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
            <path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m-9 0 1 12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2l1-12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 id="delete-modal-title" className="mt-4 text-base font-semibold text-white">
          Delete {count} transaction{count > 1 ? 's' : ''}?
        </h2>
        <p className="mt-1.5 text-sm text-neutral">
          This removes the selected record{count > 1 ? 's' : ''} from your transaction history. You can undo this
          right after.
        </p>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="secondary" size="sm" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="danger" size="sm" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
