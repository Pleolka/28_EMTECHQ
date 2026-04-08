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
  BtnPrimary,
  SectionLight,
  SectionDark,
  SectionWhite,
  SectionTitle,
  SectionLead,
  CtaWrapper,
  CtaTitle,
  CtaText,
} from "../utils/pageStyles"
//COMPONENTS
import { Head as SeoHead } from "../components/seo/Seo"
import Layout from "../layout/layout"

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
    gap: 2rem;
  `}
`

const CheckGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  margin-top: 2rem;

  ${media.lessThan("small")`
    grid-template-columns: 1fr;
  `}
`

const CheckItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
`

const CheckMark = styled.span`
  color: ${theme.color.base};
  font-size: 22px;
  font-weight: 700;
  flex-shrink: 0;
  line-height: 1.3;
`

export default function Onas() {
  return (
    <Layout>
      <PageHero>
        <StaticImage
          src="../assets/images/baner2.jpg"
          alt="EMTECHQ – o firmie"
          layout="fullWidth"
          objectFit="cover"
          quality={90}
          placeholder="blurred"
        />
        <HeroContent>
          <HeroTag>Poznaj nas</HeroTag>
          <HeroH1>O firmie</HeroH1>
        </HeroContent>
      </PageHero>

      {/* KIM JESTEŚMY */}
      <SectionLight>
        <ContainerMob>
          <SectionTitle>Kim jesteśmy</SectionTitle>
          <TwoCol>
            <p>
              Firma EMTECHQ powstała z myślą o usprawnianiu pracy w zakładach
              produkcyjnych. Specjalizujemy się w projektowaniu i produkcji
              indywidualnych rozwiązań dla transportu wewnętrznego oraz
              wyposażenia stanowisk pracy.
            </p>
            <p>
              Realizujemy projekty od fazy koncepcji aż po gotowe wdrożenie —
              zajmujemy się analizą potrzeb klienta, projektowaniem,
              prototypowaniem oraz produkcją seryjną. Każde nasze rozwiązanie
              jest tworzone z myślą o konkretnym kliencie i jego procesie.
            </p>
          </TwoCol>
        </ContainerMob>
      </SectionLight>

      {/* NASZE PODEJŚCIE */}
      <SectionWhite>
        <ContainerMob>
          <SectionTitle>Nasze podejście</SectionTitle>
          <SectionLead>
            Nie działamy schematycznie. Każde zlecenie traktujemy indywidualnie
            — analizujemy proces, potrzeby oraz warunki pracy, aby zaproponować
            rozwiązanie najlepiej dopasowane do klienta. Wierzymy, że dobry
            projekt zaczyna się od dobrego zrozumienia problemu.
          </SectionLead>
        </ContainerMob>
      </SectionWhite>

      {/* CO NAS WYRÓŻNIA */}
      <SectionLight>
        <ContainerMob>
          <SectionTitle>Co nas wyróżnia</SectionTitle>
          <CheckGrid>
            {[
              "Elastyczność i brak gotowych schematów",
              "Doświadczenie w produkcji rozwiązań specjalistycznych",
              "Szybkie reagowanie i krótkie terminy realizacji",
              "Nastawienie na realne usprawnienie procesów produkcyjnych",
              "Bezpłatny dojazd i analiza potrzeb u klienta",
              "Zgodność z wymaganiami BHP i ergonomią pracy",
            ].map(text => (
              <CheckItem key={text}>
                <CheckMark>✔</CheckMark>
                <p style={{ margin: 0 }}>{text}</p>
              </CheckItem>
            ))}
          </CheckGrid>
        </ContainerMob>
      </SectionLight>

      {/* MISJA */}
      <SectionDark>
        <CtaWrapper>
          <CtaTitle>Nasza misja</CtaTitle>
          <CtaText>
            Tworzyć rozwiązania, które zwiększają efektywność produkcji,
            poprawiają ergonomię pracy i ograniczają przestoje.
          </CtaText>
          <BtnPrimary to="/kontakt">Skontaktuj się z nami</BtnPrimary>
        </CtaWrapper>
      </SectionDark>
    </Layout>
  )
}

export const Head = () => (
  <SeoHead
    title="O firmie – EMTECHQ"
    description="Firma EMTECHQ specjalizuje się w projektowaniu i produkcji indywidualnych rozwiązań dla transportu wewnętrznego oraz wyposażenia stanowisk pracy."
  />
)
