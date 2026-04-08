import React from "react"
import { StaticImage } from "gatsby-plugin-image"
//DATA
import { sekcje, hero, cta } from "../assets/data/oferta"
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
  CtaWrapper,
  CtaTitle,
  CtaText,
} from "../utils/pageStyles"
//COMPONENTS
import { Head as SeoHead } from "../components/seo/Seo"
import Layout from "../layout/layout"

const SectionInner = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 4rem;
  align-items: start;

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
    gap: 1.5rem;
  `}
`

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem 2rem;

  ${media.lessThan("small")`
    grid-template-columns: 1fr;
  `}

  li {
    padding: 0.4rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);

    &::before {
      content: "— ";
      color: ${theme.color.base};
      font-weight: 700;
    }
  }
`

const Note = styled.p`
  color: ${theme.color.base};
  font-weight: 600;

  &::before {
    content: "→ ";
  }
`

// naprzemiennie jasna / biała sekcja
const sectionBg = ["light", "white", "light", "white", "light"]

export default function Oferta() {
  return (
    <Layout>
      <PageHero>
        <StaticImage
          src="../assets/images/baner3.jpg"
          alt={`EMTECHQ – ${hero.tytul}`}
          layout="fullWidth"
          objectFit="cover"
          quality={90}
          placeholder="blurred"
        />
        <HeroContent>
          <HeroTag>{hero.tag}</HeroTag>
          <HeroH1>{hero.tytul}</HeroH1>
          <HeroSub>{hero.opis}</HeroSub>
        </HeroContent>
      </PageHero>

      {sekcje.map((s, i) => {
        const Wrapper = sectionBg[i] === "white" ? SectionWhite : SectionLight
        return (
          <Wrapper key={s.id}>
            <ContainerMob>
              <SectionInner>
                <div>
                  <h1>{s.id}</h1>
                  <h6 style={{ color: theme.color.font }}>{s.tytul}</h6>
                </div>
                <div>
                  <p>{s.opis}</p>
                  <ItemList>
                    {s.lista.map(poz => (
                      <li key={poz}>{poz}</li>
                    ))}
                  </ItemList>
                  {s.nota && <Note>{s.nota}</Note>}
                </div>
              </SectionInner>
            </ContainerMob>
          </Wrapper>
        )
      })}

      <SectionDark>
        <CtaWrapper>
          <CtaTitle>{cta.tytul}</CtaTitle>
          <CtaText>{cta.opis}</CtaText>
          <BtnPrimary to="/kontakt">{cta.przycisk}</BtnPrimary>
        </CtaWrapper>
      </SectionDark>
    </Layout>
  )
}

export const Head = () => (
  <SeoHead
    title="Oferta – EMTECHQ"
    description="Transport międzyoperacyjny, wyposażenie hal produkcyjnych, elementy bezpieczeństwa i usługi technologiczne. Indywidualne rozwiązania dla przemysłu."
  />
)
