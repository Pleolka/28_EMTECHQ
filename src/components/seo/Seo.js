import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({
  title,
  slug,
  description,
  pageDescription,
  titleMedia,
  imageFb,
}) => {
  const data = useStaticQuery(graphql`
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

  const info = {
    description:
      "Rotkegel to rodzinna firma od pokoleń zajmujemy się produkcją roślin. Drzewa, krzewy, byliny, kwiaty - to nasza pasja. Podzielimy się naszym doświadczeniem z Tobą!",
    keyWords: ["szkółka drzew, ogrodnictwo, producent roślin,"],
    titleMedia: "Rotkegel - producent roślin najwyższej jakości.",
    imageFb:
      "https://images.unsplash.com/photo-1559749284-7a6971fd798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //twitterCreator: "",
    //twitterID
    //twitterUrl: "",
  }

  return (
    <Helmet>
      <html lang="pl" />
      <meta charset="utf-8" />
      <title>{`${title}` || `${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={`${description}` || info.description} />
      <meta name="keywords" content={info.keyWords.join(", ")} />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/*GOOGLE*/}
      <meta
        name="google-site-verification"
        content="9AZ-eHzeWL6IN9bjC7VWYLJMNpfjCsa50ng5Bsi1blg"
      />

      {/*FACEBOOK*/}
      <meta
        property="og:url"
        content={`${data.site.siteMetadata.siteUrl}${slug || ""}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={`${pageDescription}` || info.description}
      />
      <meta property="og:image" content={imageFb || info.imageFb} />

      <meta property="og:locale" content="pl_PL" />

      {/*TWITTER*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={info.twitterCreator} />
      <meta name="twitter:site" content={info.twitterUrl} />
      <meta name="twitter:title" content={titleMedia || info.titleMedia} />
      <meta
        name="twitter:description"
        content={description || info.description}
      />
      <meta name="twitter:image" content={imageFb || info.imageFb} />
    </Helmet>
  )
}
export default Seo
