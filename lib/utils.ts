import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createSlugFromName(name: string) {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

  return slug
}

export function combineName(
  user: { firstName?: string; lastName?: string } | null
) {
  if (!user) return 'Anonymous'
  if (!user.firstName && !user.lastName) return 'Anonymous'
  const { firstName, lastName } = user
  return `${firstName} ${lastName}`
}

export function formatDate(date: number) {
  const formatter = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
  return formatter.format(date)
}

export function getTimeAgo(date: number) {
  const now = Date.now(); // Current timestamp in milliseconds
  const diff = now - date; // Calculate difference in milliseconds
  const diffInSeconds = Math.floor(diff / 1000);

  const formatter = new Intl.RelativeTimeFormat('en', {
    style: 'long', // Use 'long' for full wording
  });

  if (diffInSeconds < 60) {
    return formatter.format(-diffInSeconds, 'seconds'); // e.g., "X seconds ago"
  } else if (diffInSeconds < 3600) {
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    return formatter.format(-diffInMinutes, 'minutes'); // e.g., "X minutes ago"
  } else if (diffInSeconds < 86400) {
    const diffInHours = Math.floor(diffInSeconds / 3600);
    return formatter.format(-diffInHours, 'hours'); // e.g., "X hours ago"
  } else if (diffInSeconds < 604800) {
    const diffInDays = Math.floor(diffInSeconds / 86400);
    return formatter.format(-diffInDays, 'days'); // e.g., "X days ago"
  } else if (diffInSeconds < 2419200) { // Less than 28 days
    const diffInWeeks = Math.floor(diffInSeconds / 604800);
    return formatter.format(-diffInWeeks, 'weeks'); // e.g., "X weeks ago"
  } else {
    const diffInMonths = Math.floor(diffInSeconds / 2628000); // Approximately 30 days
    return formatter.format(-diffInMonths, 'months'); // e.g., "X months ago"
  }
}
