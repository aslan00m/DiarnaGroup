import { SITE_URL } from '@/config/site'
import { company } from '@/data/company'
import { contact } from '@/data/contact'

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: company.name,
    alternateName: company.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: company.description,
    telephone: contact.phone,
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: contact.city,
      addressCountry: 'SA',
    },
    areaServed: 'SA',
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: company.name,
    url: SITE_URL,
    telephone: contact.phone,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address,
      addressLocality: contact.city,
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.7136,
      longitude: 46.6753,
    },
    openingHours: 'Sa-Th 08:00-18:00',
  }
}

export function getProductSchema(name: string, description: string, image: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'SAR',
      availability: 'https://schema.org/InStock',
    },
  }
}

export function getArticleSchema(article: {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified?: string
  author?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      name: article.author || company.name,
    },
    publisher: {
      '@type': 'Organization',
      name: company.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}
