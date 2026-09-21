import { contact } from '@/data/contact'

export function buildWhatsAppLink(message?: string, number: string = contact.whatsapp): string {
  const cleanNumber = number.replace(/[^0-9]/g, '')
  const encoded = message ? encodeURIComponent(message) : ''
  return `https://wa.me/${cleanNumber}${encoded ? `?text=${encoded}` : ''}`
}

export function openWhatsApp(message?: string, number: string = contact.whatsapp): void {
  window.open(buildWhatsAppLink(message, number), '_blank', 'noopener,noreferrer')
}
