import React from "react"
import { StaticImage } from "gatsby-plugin-image"
//STYLES
import styled from "styled-components"
import { theme } from "../utils/theme"
import { media } from "../utils/mediaquery"
import { ContainerMob } from "../utils/utils"
import {
  PageHero,
  HeroContent,
  HeroTag,
  HeroH1,
  HeroSub,
  BtnPrimary,
  SectionLight,
  SectionDark,
  SectionTitle,
  SectionLead,
  CtaWrapper,
  CtaTitle,
  CtaText,
} from "../utils/pageStyles"
//COMPONENTS
import { Head as SeoHead } from "../components/seo/Seo"
import Layout from "../layout/layout"

const KategorieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  ${media.lessThan("medium")`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${media.lessThan("small")`
    grid-template-columns: 1fr;
  `}
`

const KategoriaCard = styled.div`
  background: #fff;
  border-top: 3px solid ${theme.color.base};
  border-radius: 4px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`

const GaleriaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  ${media.lessThan("large")`
    grid-template-columns: repeat(3, 1fr);
  `}
  ${media.lessThan("medium")`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${media.lessThan("small")`
    grid-template-columns: 1fr;
  `}
`

const GaleriaItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  aspect-ratio: 4/3;
  background: #eee;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  &:hover > div:last-child {
    opacity: 1;
  }
`

const GaleriaOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(212, 31, 38, 0.75);
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 5;
`

export default function Realizacje() {
  return (
    <Layout>
      <PageHero>
        <StaticImage
          src="../assets/images/baner4.jpg"
          alt="EMTECHQ – realizacje"
          layout="fullWidth"
          objectFit="cover"
          quality={90}
          placeholder="blurred"
        />
        <HeroContent>
          <HeroTag>Nasze projekty</HeroTag>
          <HeroH1>Realizacje</HeroH1>
          <HeroSub>
            Każdy projekt powstaje na podstawie indywidualnych potrzeb klienta
            i warunków produkcyjnych.
          </HeroSub>
        </HeroContent>
      </PageHero>

      <SectionLight>
        <ContainerMob>
          <SectionTitle>Czym się zajmujemy</SectionTitle>
          <SectionLead>
            Nasze realizacje wspierają transport, organizację pracy oraz
            bezpieczeństwo w zakładach produkcyjnych.
          </SectionLead>
          <KategorieGrid>
            <KategoriaCard>
              <h5>Transport</h5>
              <p>Wózki transportowe, koleby, systemy przepływu detali</p>
            </KategoriaCard>
            <KategoriaCard>
              <h5>Wyposażenie hal</h5>
              <p>Regały przepływowe, stanowiska robocze, systemy odkładcze</p>
            </KategoriaCard>
            <KategoriaCard>
              <h5>Bezpieczeństwo</h5>
              <p>Bariery, odbojnice, schody i podesty przemysłowe</p>
            </KategoriaCard>
            <KategoriaCard>
              <h5>Elementy specjalne</h5>
              <p>Detale technologiczne, oprzyrządowanie, elementy maszyn</p>
            </KategoriaCard>
          </KategorieGrid>

          <GaleriaGrid>
            {[
              { src: "1.jpg", label: "Wózek transportowy" },
              { src: "2.jpg", label: "Regał przepływowy" },
              { src: "3.jpg", label: "Stanowisko robocze" },
              { src: "4.jpg", label: "System odkładczy" },
              { src: "5.jpg", label: "Koleba transportowa" },
              { src: "6.jpg", label: "Stojak na detale" },
              { src: "7.jpg", label: "Bariera ochronna" },
              { src: "8.jpg", label: "Konstrukcja specjalna" },
              { src: "9.jpg", label: "Wózek specjalistyczny" },
              { src: "10.jpg", label: "Podest przemysłowy" },
              { src: "11.jpg", label: "Stół roboczy" },
              { src: "12.jpg", label: "Pojemnik transportowy" },
            ].map(item => (
              <GaleriaItem key={item.src}>
                <StaticImage
                  src={`../assets/images/${item.src}`}
                  alt={`Realizacja EMTECHQ – ${item.label}`}
                  layout="fullWidth"
                  objectFit="cover"
                  quality={80}
                  placeholder="blurred"
                />
                <GaleriaOverlay>
                  <p style={{ color: "#fff", fontWeight: 600, margin: 0 }}>{item.label}</p>
                </GaleriaOverlay>
              </GaleriaItem>
            ))}
          </GaleriaGrid>
        </ContainerMob>
      </SectionLight>

      <SectionDark>
        <CtaWrapper>
          <CtaTitle>Chcesz zobaczyć więcej?</CtaTitle>
          <CtaText>
            Skontaktuj się z nami — pokażemy więcej realizacji i omówimy
            możliwe rozwiązania dla Twojego zakładu.
          </CtaText>
          <BtnPrimary to="/kontakt">Skontaktuj się z nami</BtnPrimary>
        </CtaWrapper>
      </SectionDark>
    </Layout>
  )
}

export const Head = () => (
  <SeoHead
    title="Realizacje – EMTECHQ"
    description="Galeria realizacji EMTECHQ: wózki transportowe, regały przepływowe, stanowiska robocze, bariery i elementy bezpieczeństwa dla zakładów produkcyjnych."
  />
)
