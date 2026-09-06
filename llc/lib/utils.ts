import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Combines CSS class names and merges Tailwind classes cleanly.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
