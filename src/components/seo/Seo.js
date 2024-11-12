import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({
  title,
  slug,
  description,
  pageDescription,
  titleMedia,
  imageFb,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          siteUrl
        }
      }
    }
  `)

  const defaultInfo = {
    description: "EmtechQ - Podzielimy się naszym doświadczeniem z Tobą!",
    keyWords: [
      "spawanie",
      "transport międzystanowiskowy",
      "wózki do transportu",
    ],
    titleMedia: "EmtechQ - najwyższa jakość.",
    imageFb:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    twitterCreator: "@EmtechQ",
    twitterUrl: "https://twitter.com/EmtechQ",
  }

  const {
    description: defaultDescription,
    keyWords,
    titleMedia: defaultTitleMedia,
    imageFb: defaultImageFb,
    twitterCreator,
    twitterUrl,
  } = defaultInfo

  const siteTitle = site.siteMetadata.title
  const siteAuthor = site.siteMetadata.author
  const siteUrl = site.siteMetadata.siteUrl

  return {
    siteTitle,
    siteAuthor,
    siteUrl,
    title: title ?? siteTitle,
    description: description ?? defaultDescription,
    pageDescription: pageDescription ?? defaultDescription,
    keyWords,
    titleMedia: titleMedia ?? defaultTitleMedia,
    imageFb: imageFb ?? defaultImageFb,
    twitterCreator,
    twitterUrl,
    slug,
  }
}

export default Seo

export const Head = ({
  title,
  description,
  pageDescription,
  titleMedia,
  imageFb,
  slug,
}) => {
  const seo = Seo({
    title,
    description,
    pageDescription,
    titleMedia,
    imageFb,
    slug,
  })

  return (
    <>
      <html lang="pl" />
      <meta charSet="utf-8" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keyWords.join(", ")} />
      <meta name="author" content={seo.siteAuthor} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Google Verification */}
      <meta
        name="google-site-verification"
        content="9AZ-eHzeWL6IN9bjC7VWYLJMNpfjCsa50ng5Bsi1blg"
      />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={`${seo.siteUrl}${seo.slug ?? ""}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.pageDescription} />
      <meta property="og:image" content={seo.imageFb} />
      <meta property="og:locale" content="pl_PL" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterCreator} />
      <meta name="twitter:site" content={seo.twitterUrl} />
      <meta name="twitter:title" content={seo.titleMedia} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.imageFb} />
    </>
  )
}
