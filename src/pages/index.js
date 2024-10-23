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
import Seo from "../components/seo/Seo"

const CardWrapper = styled.div`
  margin-top: 3rem;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(${props => props.grupyCount || 1}, 300px);
  column-gap: 3rem;
  row-gap: 2rem;
  ${media.lessThan("medium")`
    grid-template-columns: repeat(2, 250px);
    column-gap: 1rem;
  `}

  ${media.lessThan("small")`
    grid-template-columns: repeat(1, 250px);
  `}
`

export default function Home({ data }) {
  return (
    <>
      <Seo title="Kontakt" slug="/kontakt" />
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
          <p>Najnowsze informacje o wydarzeniach z naszego przedszkola</p>
        </Heading>
      </Container>
    </>
  )
}
