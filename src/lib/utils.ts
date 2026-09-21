export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\+966|0)?(\d{2})(\d{3})(\d{4})/, '$1 $2 $3 $4')
}
