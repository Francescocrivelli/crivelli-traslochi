
// File: src/pages/_app.js (updated)
import { DefaultSeo } from 'next-seo'
import { siteConfig } from '@/lib/config'
import ErrorBoundary from '@/components/ErrorBoundary'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <DefaultSeo
        defaultTitle={siteConfig.title}
        titleTemplate={`%s | ${siteConfig.name}`}
        description={siteConfig.description}
        canonical={siteConfig.url}
        openGraph={{
          type: 'website',
          locale: 'it_CH',
          url: siteConfig.url,
          siteName: siteConfig.name,
          images: [
            {
              url: siteConfig.ogImage,
              width: 1200,
              height: 630,
              alt: siteConfig.title,
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}

// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
