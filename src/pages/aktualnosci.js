import React from "react"
import { StaticImage } from "gatsby-plugin-image"
//DATA
import { info, godziny } from "../assets/data/kontakt"
//STYLES
import styled from "styled-components"
import { theme } from "../utils/theme"
import { media } from "../utils/mediaquery"
import { Heading, Container, Baner } from "../utils/utils"
//COMPONENTS
import { Head as SeoHead } from "../components/seo/Seo"
import Layout from "../layout/layout"

export default function Aktualnosci({ data }) {
  return (
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
          <h1>Aktualności</h1>
          <p>Najnowsze informacje o działaniu naszej firmy</p>
        </Heading>
      </Container>
    </Layout>
  )
}
export const Head = () => (
  <SeoHead
    title="Aktualnosci - EmtechQ"
    description="EmtechQ - profesjonalne usługi spawalnicze i transportowe."
  />
)
