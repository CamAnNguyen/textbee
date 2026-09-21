const POLAR_CUSTOMER_PORTAL_REQUEST_BASE =
  'https://sms.tainhamassage.com/dashboard'

export function polarCustomerPortalRequestUrl(
  email?: string | null
): string {
  const trimmed = email?.trim()
  if (!trimmed) return POLAR_CUSTOMER_PORTAL_REQUEST_BASE
  return `${POLAR_CUSTOMER_PORTAL_REQUEST_BASE}?email=${encodeURIComponent(trimmed)}`
}

export const ExternalLinks = {
  patreon: 'https://github.com/CamAnNguyen/textbee',
  github: 'https://github.com/CamAnNguyen/textbee',
  discord: 'https://github.com/CamAnNguyen/textbee/issues',
  polar: 'https://sms.tainhamassage.com',
  twitter: 'https://sms.tainhamassage.com',
  linkedin: 'https://sms.tainhamassage.com',
}
