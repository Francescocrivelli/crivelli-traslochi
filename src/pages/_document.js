// File: src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'
import { siteConfig } from '@/lib/config'

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content={siteConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="crivelli-traslochi.ch" />
        <meta property="twitter:url" content={siteConfig.url} />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={siteConfig.ogImage} />
      </Head>
      <body className="min-h-screen bg-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body className="antialiased">
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }
