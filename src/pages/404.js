import React from "react"
import { StaticImage } from "gatsby-plugin-image"
//DATA
import { info, godziny } from "../assets/data/kontakt"
//STYLES
import styled from "styled-components"
import { media } from "../utils/mediaquery"
import { Heading, Container, Baner } from "../utils/utils"
//COMPONENTS
import Layout from "../layout/layout"
import { Head as SeoHead } from "../components/seo/Seo"

const Page404 = () => {
  return (
    <>
      <Layout>
        <Baner>
          <StaticImage
            src="../assets/images/baner4.jpg"
            alt="Szkółka drzew z lotu ptaka"
            layout="fullWidth"
            objectFit="cover"
            quality={100}
            placeholder="blurred"
          />
        </Baner>
        <Container>
          <Heading>
            <h1>404</h1>
            <p>Upsss... Strona której szukasz nie ustnie.</p>
          </Heading>
        </Container>
      </Layout>
    </>
  )
}

export const Head = () => (
  <SeoHead
    title="Strona Główna - EmtechQ"
    description="EmtechQ - profesjonalne usługi spawalnicze i transportowe."
  />
)

export default Page404
