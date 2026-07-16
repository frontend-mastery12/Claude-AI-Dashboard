import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines conditional class names and safely merges conflicting
 * Tailwind utility classes (e.g. "p-2" vs "p-4").
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
