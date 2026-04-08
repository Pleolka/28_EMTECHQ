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

const StepRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 2rem;
  align-items: start;
  padding: 3rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  &:last-child {
    border-bottom: none;
  }

  ${media.lessThan("small")`
    grid-template-columns: 60px 1fr;
    gap: 1rem;
    padding: 2rem 0;
  `}
`

const StepNum = styled.div`
  font-size: 48px;
  font-weight: 700;
  font-family: ${theme.font.special};
  color: ${theme.color.base};
  line-height: 1;

  ${media.lessThan("small")`
    font-size: 36px;
  `}
`

const NoteBox = styled.div`
  margin-top: 3rem;
  background: #fff;
  border-left: 4px solid ${theme.color.base};
  padding: 1.5rem 2rem;
  border-radius: 0 4px 4px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`

const steps = [
  {
    n: "01",
    t: "Analiza potrzeb",
    d: "Bezpłatnie przyjeżdżamy do klienta, poznajemy problem oraz proces produkcyjny. Oglądamy linię produkcyjną, rozmawiamy z pracownikami i identyfikujemy obszary wymagające poprawy.",
  },
  {
    n: "02",
    t: "Projekt rozwiązania",
    d: "Na podstawie zebranych informacji przygotowujemy koncepcję oraz projekt techniczny. Dobieramy materiały, technologię wykonania i proponujemy optymalne rozwiązanie.",
  },
  {
    n: "03",
    t: "Prototyp i uzgodnienia",
    d: "Dopasowujemy rozwiązanie do wymagań i wprowadzamy ewentualne zmiany. W razie potrzeby wykonujemy prototyp testowany w warunkach rzeczywistych u klienta.",
  },
  {
    n: "04",
    t: "Produkcja i wdrożenie",
    d: "Realizujemy projekt i dostarczamy gotowe rozwiązanie. Zajmujemy się montażem i wdrożeniem na miejscu u klienta.",
  },
]

export default function JakPracujemy() {
  return (
    <Layout>
      <PageHero>
        <StaticImage
          src="../assets/images/baner3.jpg"
          alt="EMTECHQ – jak pracujemy"
          layout="fullWidth"
          objectFit="cover"
          quality={90}
          placeholder="blurred"
        />
        <HeroContent>
          <HeroTag>Nasz proces</HeroTag>
          <HeroH1>Jak pracujemy</HeroH1>
          <HeroSub>
            Prosty i sprawdzony proces — od pierwszej rozmowy do wdrożenia
            gotowego rozwiązania.
          </HeroSub>
        </HeroContent>
      </PageHero>

      <SectionLight>
        <ContainerMob>
          <SectionTitle>Cztery kroki do rozwiązania</SectionTitle>
          <SectionLead>
            Każdy projekt realizujemy według tego samego sprawdzonego schematu
            — zaczynamy od zrozumienia problemu, a kończymy na wdrożeniu.
          </SectionLead>

          {steps.map(s => (
            <StepRow key={s.n}>
              <StepNum>{s.n}</StepNum>
              <div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </StepRow>
          ))}

          <NoteBox>
            <p>
              <strong>Możliwość realizacji na podstawie dokumentacji klienta</strong>{" "}
              — jeśli posiadasz własny projekt lub rysunek techniczny,
              zrealizujemy go zgodnie z dostarczoną dokumentacją.
            </p>
          </NoteBox>
        </ContainerMob>
      </SectionLight>

      <SectionWhite>
        <ContainerMob>
          <SectionTitle>Dlaczego tak pracujemy</SectionTitle>
          <SectionLead>
            Nasz proces jest wynikiem wieloletniego doświadczenia. Wiemy, że
            każdy zakład produkcyjny jest inny — dlatego nie oferujemy gotowych
            rozwiązań z katalogu, lecz projektujemy je razem z klientem.
          </SectionLead>
        </ContainerMob>
      </SectionWhite>

      <SectionDark>
        <CtaWrapper>
          <CtaTitle>Zacznijmy od rozmowy</CtaTitle>
          <CtaText>
            Skontaktuj się z nami — bezpłatnie przyjedziemy, poznamy Twój
            problem i zaproponujemy rozwiązanie.
          </CtaText>
          <BtnPrimary to="/kontakt">Skontaktuj się z nami</BtnPrimary>
        </CtaWrapper>
      </SectionDark>
    </Layout>
  )
}

export const Head = () => (
  <SeoHead
    title="Jak pracujemy – EMTECHQ"
    description="Poznaj nasz proces: analiza potrzeb, projekt rozwiązania, prototyp i uzgodnienia, produkcja i wdrożenie. Bezpłatny dojazd do klienta."
  />
)
