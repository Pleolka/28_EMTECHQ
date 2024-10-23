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

const GaleriaWrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(${props => props.xl || 4}, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;

  ${media.lessThan("large")`
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  `}

  ${media.lessThan("medium")`
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  `}

  ${media.lessThan("small")`
    grid-template-columns: repeat(2, 1fr);
  `}
`

const GaleriaCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid ${theme.color.base};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  h5 {
    text-align: center;
    margin-bottom: 2rem;
  }

  &:hover {
    background-color: ${theme.color.baseLight};
  }
`

export default function Galeria({}) {
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
