// File: src/lib/utils.js
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatDate(date) {
    return new Date(date).toLocaleDateString('it-CH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }
  