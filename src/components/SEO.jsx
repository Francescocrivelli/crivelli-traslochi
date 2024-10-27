
// File: src/components/SEO.jsx
import { NextSeo } from 'next-seo'
import { siteConfig } from '@/lib/config'

export function SEO({ title, description, canonical, openGraph }) {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        title,
        description,
        url: canonical,
        ...openGraph,
        siteName: siteConfig.name,
        images: [
          {
            url: siteConfig.ogImage,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }}
      twitter={{
        handle: '@crivellitraslochi',
        site: '@crivellitraslochi',
        cardType: 'summary_large_image',
      }}
    />
  )
}