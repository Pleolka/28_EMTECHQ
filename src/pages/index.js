import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
//STYLES
import styled from "styled-components"
import { theme } from "../utils/theme"
import { media } from "../utils/mediaquery"
import { ContainerMob, Baner } from "../utils/utils"
//COMPONENTS
import { Head as SeoHead } from "../components/seo/Seo"
import Layout from "../layout/layout"

// --- HERO ---
const HeroWrapper = styled.div`
  position: relative;
  min-height: 450px;
  display: flex;
  align-items: flex-end;

  ${media.lessThan("medium")`
    min-height: 360px;
  `}
  ${media.lessThan("small")`
    min-height: 240px;
  `}
`

const HeroContent = styled(ContainerMob)`
  position: relative;
  z-index: 10;
  padding-bottom: 3rem;
  padding-top: 6rem;

  ${media.lessThan("medium")`
    padding-bottom: 2rem;
    padding-top: 4rem;
  `}
`

const HeroTag = styled.p`
  color: ${theme.color.baseLight};
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`

const HeroH1 = styled.h1`
  color: ${theme.color.white};
  font-family: ${theme.font.special};
  margin-bottom: 1rem;
  max-width: 700px;

  ${media.lessThan("small")`
    font-size: 28px;
  `}
`

const HeroSub = styled.p`
  color: rgba(255, 255, 255, 0.85);
  max-width: 500px;
  font-size: 18px;
  margin-bottom: 2rem;

  ${media.lessThan("small")`
    font-size: 16px;
  `}
`

const HeroList = styled.ul`
  list-style: none;
  margin: 0 0 2rem 0;
  padding: 0;

  li {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.4rem;
    font-size: 17px;

    &::before {
      content: "→ ";
      color: ${theme.color.baseLight};
      font-weight: 700;
    }
  }
`

const BtnPrimary = styled(Link)`
  display: inline-block;
  background-color: ${theme.color.base};
  color: ${theme.color.white};
  padding: 0.9rem 2.2rem;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: ${theme.color.baseDark};
    color: ${theme.color.white};
  }
`

// --- SECTIONS ---
const SectionLight = styled.section`
  background-color: #f8f8f8;
  padding: 5rem 0;

  ${media.lessThan("medium")`
    padding: 3rem 0;
  `}
`

const SectionDark = styled.section`
  background-color: #1a1a1a;
  padding: 5rem 0;

  ${media.lessThan("medium")`
    padding: 3rem 0;
  `}
`

const SectionWhite = styled.section`
  background-color: #fff;
  padding: 5rem 0;

  ${media.lessThan("medium")`
    padding: 3rem 0;
  `}
`

const SectionTitle = styled.h2`
  font-family: ${theme.font.special};
  color: ${theme.color.base};
  margin-bottom: 0.5rem;
`

const SectionLead = styled.p`
  font-size: 18px;
  color: ${theme.color.grey};
  margin-bottom: 2.5rem;
  max-width: 600px;
`

// --- CO ROBIMY ---
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

const ServiceCardTitle = styled.h5`
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`

const ServiceCardText = styled.p`
  font-size: 15px;
  color: ${theme.color.grey};
  line-height: 1.6;
`

// --- DLACZEGO MY ---
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

const CheckText = styled.p`
  font-size: 17px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  margin: 0;
`

// --- JAK PRACUJEMY SKRÓT ---
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

const StepTitle = styled.h5`
  color: #1a1a1a;
  margin-bottom: 0.3rem;
`

const StepDesc = styled.p`
  font-size: 14px;
  color: ${theme.color.grey};
  line-height: 1.5;
`

// --- CTA ---
const CtaWrapper = styled.div`
  text-align: center;
  padding: 4rem 1rem;
`

const CtaTitle = styled.h2`
  font-family: ${theme.font.special};
  color: ${theme.color.white};
  margin-bottom: 1rem;
`

const CtaText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

export default function Home() {
  return (
    <Layout>
      <Baner>
        <StaticImage
          src="../assets/images/baner.jpg"
          alt="EMTECHQ – rozwiązania dla przemysłu"
          layout="fullWidth"
          objectFit="cover"
          quality={90}
          placeholder="blurred"
        />
      </Baner>
      {/* HERO */}
      <HeroWrapper>
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
      </HeroWrapper>

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
              <ServiceCardTitle>Transport międzyoperacyjny</ServiceCardTitle>
              <ServiceCardText>
                Wózki transportowe, koleby i systemy przepływu detali
                dostosowane do Twojego procesu produkcyjnego.
              </ServiceCardText>
            </ServiceCard>
            <ServiceCard>
              <ServiceCardTitle>Regały i pojemniki</ServiceCardTitle>
              <ServiceCardText>
                Regały, stojaki, pojemniki i kontenery usprawniające organizację
                materiałów i detali.
              </ServiceCardText>
            </ServiceCard>
            <ServiceCard>
              <ServiceCardTitle>Stanowiska robocze</ServiceCardTitle>
              <ServiceCardText>
                Stoły robocze i stanowiska ergonomiczne projektowane pod
                konkretne operacje produkcyjne.
              </ServiceCardText>
            </ServiceCard>
            <ServiceCard>
              <ServiceCardTitle>Bezpieczeństwo</ServiceCardTitle>
              <ServiceCardText>
                Bariery, odbojnice i elementy chroniące pracowników oraz
                infrastrukturę hali.
              </ServiceCardText>
            </ServiceCard>
            <ServiceCard>
              <ServiceCardTitle>Konstrukcje specjalne</ServiceCardTitle>
              <ServiceCardText>
                Niestandardowe elementy wspomagające produkcję — od prostych
                detali po złożone oprzyrządowanie.
              </ServiceCardText>
            </ServiceCard>
            <ServiceCard>
              <ServiceCardTitle>Usługi technologiczne</ServiceCardTitle>
              <ServiceCardText>
                Cięcie laserem, spawanie MIG, lakierowanie i cynkowanie — od
                projektu do gotowego wyrobu.
              </ServiceCardText>
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
            <CheckItem>
              <CheckMark>✔</CheckMark>
              <CheckText>Indywidualne podejście do każdego projektu</CheckText>
            </CheckItem>
            <CheckItem>
              <CheckMark>✔</CheckMark>
              <CheckText>
                Bezpłatny dojazd i analiza potrzeb u klienta
              </CheckText>
            </CheckItem>
            <CheckItem>
              <CheckMark>✔</CheckMark>
              <CheckText>
                Kompleksowa realizacja: projekt + prototyp + produkcja
              </CheckText>
            </CheckItem>
            <CheckItem>
              <CheckMark>✔</CheckMark>
              <CheckText>Szybka realizacja i krótkie terminy</CheckText>
            </CheckItem>
            <CheckItem>
              <CheckMark>✔</CheckMark>
              <CheckText>Zgodność z wymaganiami BHP i ergonomią</CheckText>
            </CheckItem>
            <CheckItem>
              <CheckMark>✔</CheckMark>
              <CheckText>Nastawienie na realne usprawnienie procesów</CheckText>
            </CheckItem>
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
            <StepBox>
              <StepNumber>01</StepNumber>
              <StepTitle>Analiza potrzeb</StepTitle>
              <StepDesc>
                Bezpłatnie przyjeżdżamy do klienta i poznajemy problem oraz
                proces produkcyjny.
              </StepDesc>
            </StepBox>
            <StepBox>
              <StepNumber>02</StepNumber>
              <StepTitle>Projekt rozwiązania</StepTitle>
              <StepDesc>
                Na podstawie zebranych informacji przygotowujemy koncepcję i
                projekt.
              </StepDesc>
            </StepBox>
            <StepBox>
              <StepNumber>03</StepNumber>
              <StepTitle>Prototyp i uzgodnienia</StepTitle>
              <StepDesc>
                Dopasowujemy rozwiązanie do wymagań i wprowadzamy ewentualne
                zmiany.
              </StepDesc>
            </StepBox>
            <StepBox>
              <StepNumber>04</StepNumber>
              <StepTitle>Produkcja i wdrożenie</StepTitle>
              <StepDesc>
                Realizujemy projekt i dostarczamy gotowe rozwiązanie.
              </StepDesc>
            </StepBox>
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
