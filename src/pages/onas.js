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

// Stylowanie dla personelu
const PersonelWrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;

  ${media.lessThan("medium")`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.lessThan("small")`
    grid-template-columns: repeat(1, 1fr);
  `}
`

const PersonelCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${theme.color.base};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  &:hover {
    background-color: ${theme.color.baseLight};
  }
`

const PersonalCardHeader = styled.div`
  padding-top: 2rem;
  height: 120px;
  margin-bottom: 1rem;
  h5,
  p {
    text-align: center;
  }
`

// Stylowanie dla zajęć dodatkowych
const ZajeciaDodatkoweWrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;

  ${media.lessThan("medium")`
    grid-template-columns: repeat(1, 1fr);
  `}

  ${media.lessThan("small")`
    grid-template-columns: repeat(1, 1fr);
  `}
`

const ZajeciaDodatkowe = styled.div`
  p:nth-of-type(1),
  h5,
  li {
    text-align: center;
  }

  ul {
    margin-top: 1rem;
    li {
      list-style-type: none;
    }
  }
`

export default function Onas({ data }) {
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
          <h1>O nas</h1>
          <p>EmtechQ - solidna firma</p>
        </Heading>
      </Container>
    </Layout>
  )
}
export const Head = () => (
  <SeoHead
    title="O nas - EmtechQ"
    description="EmtechQ - profesjonalne usługi spawalnicze i transportowe."
  />
)
