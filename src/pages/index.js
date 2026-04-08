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
  HeroList,
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

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  ${media.lessThan("medium")`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${media.lessThan("small")`
    grid-template-columns: 1fr;
  `}
`

const ServiceCard = styled.div`
  background: #fff;
  border-left: 4px solid ${theme.color.base};
  border-radius: 4px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
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

const StepsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;

  ${media.lessThan("medium")`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${media.lessThan("small")`
    grid-template-columns: 1fr;
  `}
`

const StepBox = styled.div`
  text-align: center;
  padding: 1.5rem 1rem;
  border-top: 3px solid ${theme.color.base};
`

const StepNumber = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: ${theme.color.base};
  font-family: ${theme.font.special};
  margin-bottom: 0.5rem;
`

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <PageHero>
        <StaticImage
          src="../assets/images/baner.jpg"
          alt="EMTECHQ – rozwiązania dla przemysłu"
          layout="fullWidth"
          objectFit="cover"
          quality={90}
          placeholder="blurred"
        />
        <HeroContent>
          <HeroTag>Indywidualne rozwiązania dla przemysłu</HeroTag>
          <HeroH1>EMTECHQ</HeroH1>
          <HeroSub>
            Projektujemy i produkujemy wyposażenie, które realnie usprawnia
            procesy produkcyjne.
          </HeroSub>
          <HeroList>
            <li>Transport międzyoperacyjny</li>
            <li>Wyposażenie hal produkcyjnych</li>
            <li>Konstrukcje dopasowane do Twoich potrzeb</li>
          </HeroList>
          <BtnPrimary to="/kontakt">Skontaktuj się z nami</BtnPrimary>
        </HeroContent>
      </PageHero>

      {/* CO ROBIMY */}
      <SectionLight>
        <ContainerMob>
          <SectionTitle>Co robimy</SectionTitle>
          <SectionLead>
            Tworzymy rozwiązania, których nie znajdziesz w katalogach. Każdy
            projekt powstaje indywidualnie — dopasowany do procesu, przestrzeni
            i potrzeb klienta.
          </SectionLead>
          <ServiceGrid>
            <ServiceCard>
              <h5>Transport międzyoperacyjny</h5>
              <p>
                Wózki transportowe, koleby i systemy przepływu detali
                dostosowane do Twojego procesu produkcyjnego.
              </p>
            </ServiceCard>
            <ServiceCard>
              <h5>Regały i pojemniki</h5>
              <p>
                Regały, stojaki, pojemniki i kontenery usprawniające organizację
                materiałów i detali.
              </p>
            </ServiceCard>
            <ServiceCard>
              <h5>Stanowiska robocze</h5>
              <p>
                Stoły robocze i stanowiska ergonomiczne projektowane pod
                konkretne operacje produkcyjne.
              </p>
            </ServiceCard>
            <ServiceCard>
              <h5>Bezpieczeństwo</h5>
              <p>
                Bariery, odbojnice i elementy chroniące pracowników oraz
                infrastrukturę hali.
              </p>
            </ServiceCard>
            <ServiceCard>
              <h5>Konstrukcje specjalne</h5>
              <p>
                Niestandardowe elementy wspomagające produkcję — od prostych
                detali po złożone oprzyrządowanie.
              </p>
            </ServiceCard>
            <ServiceCard>
              <h5>Usługi technologiczne</h5>
              <p>
                Cięcie laserem, spawanie MIG, lakierowanie i cynkowanie — od
                projektu do gotowego wyrobu.
              </p>
            </ServiceCard>
          </ServiceGrid>
        </ContainerMob>
      </SectionLight>

      {/* DLACZEGO MY */}
      <SectionDark>
        <ContainerMob>
          <SectionTitle style={{ color: theme.color.baseLight }}>
            Dlaczego my
          </SectionTitle>
          <SectionLead style={{ color: "rgba(255,255,255,0.6)" }}>
            Wybierając EMTECHQ zyskujesz partnera, który rozumie specyfikę
            produkcji.
          </SectionLead>
          <CheckGrid>
            {[
              "Indywidualne podejście do każdego projektu",
              "Bezpłatny dojazd i analiza potrzeb u klienta",
              "Kompleksowa realizacja: projekt + prototyp + produkcja",
              "Szybka realizacja i krótkie terminy",
              "Zgodność z wymaganiami BHP i ergonomią",
              "Nastawienie na realne usprawnienie procesów",
            ].map(text => (
              <CheckItem key={text}>
                <CheckMark>✔</CheckMark>
                <p style={{ color: "rgba(255,255,255,0.9)", margin: 0 }}>{text}</p>
              </CheckItem>
            ))}
          </CheckGrid>
        </ContainerMob>
      </SectionDark>

      {/* JAK PRACUJEMY SKRÓT */}
      <SectionWhite>
        <ContainerMob>
          <SectionTitle>Jak pracujemy</SectionTitle>
          <SectionLead>
            Prosty i sprawdzony proces — od pierwszej rozmowy do wdrożenia
            rozwiązania.
          </SectionLead>
          <StepsRow>
            {[
              { n: "01", t: "Analiza potrzeb", d: "Bezpłatnie przyjeżdżamy do klienta i poznajemy problem oraz proces produkcyjny." },
              { n: "02", t: "Projekt rozwiązania", d: "Na podstawie zebranych informacji przygotowujemy koncepcję i projekt." },
              { n: "03", t: "Prototyp i uzgodnienia", d: "Dopasowujemy rozwiązanie do wymagań i wprowadzamy ewentualne zmiany." },
              { n: "04", t: "Produkcja i wdrożenie", d: "Realizujemy projekt i dostarczamy gotowe rozwiązanie." },
            ].map(s => (
              <StepBox key={s.n}>
                <StepNumber>{s.n}</StepNumber>
                <h5>{s.t}</h5>
                <p>{s.d}</p>
              </StepBox>
            ))}
          </StepsRow>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <BtnPrimary to="/jakpracujemy">Dowiedz się więcej</BtnPrimary>
          </div>
        </ContainerMob>
      </SectionWhite>

      {/* CTA */}
      <SectionDark>
        <CtaWrapper>
          <CtaTitle>Masz problem w produkcji?</CtaTitle>
          <CtaText>
            Zaprojektujemy rozwiązanie dopasowane do Twoich potrzeb. Zadzwoń lub
            napisz — dojazd do klienta jest bezpłatny.
          </CtaText>
          <BtnPrimary to="/kontakt">Skontaktuj się z nami</BtnPrimary>
        </CtaWrapper>
      </SectionDark>
    </Layout>
  )
}

export const Head = () => (
  <SeoHead
    title="EMTECHQ – indywidualne rozwiązania dla przemysłu"
    description="Projektujemy i produkujemy wyposażenie hal produkcyjnych: transport międzyoperacyjny, stanowiska robocze, bariery i elementy bezpieczeństwa."
  />
)
