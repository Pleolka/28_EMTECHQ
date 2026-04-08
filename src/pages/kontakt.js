import React from "react"
import { StaticImage } from "gatsby-plugin-image"
//DATA
import { info } from "../assets/data/kontakt"
//STYLES
import styled from "styled-components"
import { media } from "../utils/mediaquery"
import { ContainerMob } from "../utils/utils"
import {
  PageHero,
  HeroContent,
  HeroTag,
  HeroH1,
  HeroSub,
  SectionWhite,
} from "../utils/pageStyles"
//COMPONENTS
import { Head as SeoHead } from "../components/seo/Seo"
import Layout from "../layout/layout"

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
    gap: 2rem;
  `}

  iframe {
    width: 100%;
    height: 100%;
    min-height: 350px;
    border: none;

    ${media.lessThan("medium")`
      min-height: 280px;
    `}
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  b {
    margin-right: 1rem;
  }

  label {
    margin-bottom: 1rem;
    margin-top: 3rem;

    ${media.lessThan("small")`
      margin-top: 0;
    `}
  }
`

export default function Kontakt() {
  return (
    <Layout>
      {/* HERO */}
      <PageHero>
        <StaticImage
          src="../assets/images/baner4.jpg"
          alt="EMTECHQ – kontakt"
          layout="fullWidth"
          objectFit="cover"
          quality={90}
          placeholder="blurred"
        />
        <HeroContent>
          <HeroTag>Skontaktuj się z nami</HeroTag>
          <HeroH1>Kontakt</HeroH1>
          <HeroSub>
            Zadzwoń lub napisz — dojazd do klienta jest bezpłatny.
          </HeroSub>
        </HeroContent>
      </PageHero>

      {/* DANE + MAPA */}
      <SectionWhite>
        <ContainerMob>
          <Info>
            <iframe
              title="Mapa dojazdu EMTECHQ"
              src="https://www.openstreetmap.org/export/embed.html?bbox=18.95487070083618%2C49.95783977359637%2C18.969032764434818%2C49.964120555789364&amp;layer=mapnik&amp;marker=49.960980267116625%2C18.961951732635498"
              scrolling="no"
            />
            <TextWrapper>
              <label>Kontakt</label>
              <h4>{info.tel}</h4>
              <h4>{info.mail}</h4>

              <label>Adres</label>
              <p>
                <b>{info.nazwa}</b>
                <br />
                {info.nazwa2}
              </p>
              <p>
                ul. {info.ulica} {info.nrBud}
              </p>
              <p>
                {info.kod} {info.miasto}
              </p>
              <p>{info.woj}</p>
            </TextWrapper>
          </Info>
        </ContainerMob>
      </SectionWhite>
    </Layout>
  )
}

export const Head = () => (
  <SeoHead
    title="Kontakt – EMTECHQ"
    description="Skontaktuj się z EMTECHQ. Zadzwoń lub napisz — bezpłatnie przyjedziemy do Ciebie i omówimy rozwiązanie dla Twojego zakładu."
  />
)
