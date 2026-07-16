import Button from '../../../components/ui/Button'

export default function BulkActionsBar({ selectedCount, onDelete, onArchive, onExport, onClear }) {
  if (selectedCount === 0) return null

  return (
    <div className="flex flex-col gap-3 border-b border-accent/20 bg-accent/[0.06] px-6 py-3.5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="chip-success">{selectedCount} selected</span>
        <button type="button" onClick={onClear} className="text-xs font-medium text-neutral underline-offset-2 hover:text-white hover:underline">
          Clear selection
        </button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm" onClick={onExport}>
          Export
        </Button>
        <Button variant="secondary" size="sm" onClick={onArchive}>
          Archive
        </Button>
        <Button variant="danger" size="sm" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  )
}
