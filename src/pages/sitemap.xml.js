import { generateSiteMap } from '../lib/sitemap'

function SiteMap() {
  // getStaticProps will handle the XML generation
  return null
}

export async function getStaticProps() {
  const sitemap = generateSiteMap()

  return {
    props: {
      sitemap
    }
  }
}

export default SiteMap