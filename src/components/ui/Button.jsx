import { cn } from '../../utils/cn'

const VARIANT_CLASS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  danger: 'btn-danger',
}

const SIZE_CLASS = {
  sm: 'px-3 py-1.5 text-xs',
  md: '',
  lg: 'px-5 py-3 text-base',
}

/**
 * Button
 * variant: 'primary' | 'secondary' | 'ghost' | 'danger'
 * size: 'sm' | 'md' | 'lg'
 * icon: optional icon node rendered before children
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  className,
  children,
  ...props
}) {
  return (
    <button
      className={cn(VARIANT_CLASS[variant] ?? VARIANT_CLASS.primary, SIZE_CLASS[size], className)}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}
