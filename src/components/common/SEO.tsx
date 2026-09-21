import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '@/config/site'
import { company } from '@/data/company'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  schema?: Record<string, unknown> | Array<Record<string, unknown>>
  noindex?: boolean
}

export function SEO({
  title,
  description = company.description,
  canonical,
  ogImage = `${SITE_URL}/favicon.svg`,
  ogType = 'website',
  schema,
  noindex = false,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${company.shortName}`
    : `${company.name} | ${company.tagline}`

  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={url} />}

      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:locale" content="ar_SA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  )
}
