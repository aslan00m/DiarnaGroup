export type Sector = 'equipment' | 'stone' | 'marble' | 'contracting'

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}

export interface Pricing {
  daily: number | null
  weekly: number | null
  monthly: number | null
  note?: string
}

export interface Equipment {
  id: string
  slug: string
  name: string
  category: string
  image: string
  description: string
  availability: 'available' | 'limited' | 'unavailable'
  pricing: Pricing
  features: string[]
  power?: string
  fuel?: string
  location?: string
  whatsappMessage?: string
  seo: SEOData
}

export interface ServiceSector {
  id: string
  sector: Sector
  name: string
  slug: string
  short: string
  description: string
  image: string
  features: string[]
  cta: string
  whatsappMessage: string
  seo: SEOData
}

export interface Project {
  id: string
  slug: string
  title: string
  category: string
  city: string
  status: 'ongoing' | 'completed' | 'planned'
  description: string
  images: string[]
  services: string[]
  date: string
  seo: SEOData
}

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  featuredImage: string
  category: string
  tags: string[]
  author: string
  date: string
  updatedAt: string
  seoTitle: string
  seoDescription: string
  focusKeyword: string
  relatedServices: string[]
  relatedEquipment: string[]
}
