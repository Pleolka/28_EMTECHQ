import React from "react"
import { StaticImage } from "gatsby-plugin-image"
//DATA
import { info, godziny } from "../assets/data/kontakt"
//STYLES
import styled from "styled-components"
import { media } from "../utils/mediaquery"
import { Heading, Container, Baner } from "../utils/utils"
//COMPONENTS
import Seo from "../components/seo/Seo"

const Page404 = () => {
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
export default Page404
