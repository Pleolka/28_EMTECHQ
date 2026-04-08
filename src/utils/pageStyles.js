import styled from "styled-components"
import { Link } from "gatsby"
import { theme } from "./theme"
import { media } from "./mediaquery"
import { ContainerMob } from "./utils"

// ─── HERO ────────────────────────────────────────────────────────────────────
//
// PageHero zastępuje stary Baner + HeroWrapper.
// Jeden kontener: obraz absolutny w tle, treść wyznacza wysokość.
// margin-top: -80px sprawia że sekcja wchodzi pod przezroczysty navbar.

export const PageHero = styled.div`
  position: relative;
  width: 100%;
  min-height: 480px;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-top: -80px; /* wchodzi pod desktop navbar */

  /* obraz gatsby-image-wrapper wypełnia cały kontener */
  .gatsby-image-wrapper {
    position: absolute !important;
    inset: 0;
    width: 100% !important;
    height: 100% !important;
  }

  /* przyciemnienie / overlay */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
      90deg,
      rgba(20, 10, 10, 0.95) 0%,
      rgba(20, 10, 10, 0.75) 50%,
      rgba(20, 10, 10, 0) 100%
    );
  }

  ${media.lessThan("medium")`
    min-height: 380px;
    margin-top: -50px; /* wchodzi pod mobile navbar */
  `}

  ${media.lessThan("small")`
    min-height: 280px;
  `}
`

export const HeroContent = styled(ContainerMob)`
  position: relative;
  z-index: 2;
  padding-top: calc(80px + 2rem); /* navbar + odstęp */
  padding-bottom: 3rem;

  ${media.lessThan("medium")`
    padding-top: calc(50px + 1rem);
    padding-bottom: 2rem;
  `}

  ${media.lessThan("small")`
    padding-top: calc(50px + 1rem);
    padding-bottom: 1.5rem;
  `}
`

export const HeroTag = styled.label`
  color: ${theme.color.baseLight};
  display: block;
  margin-bottom: 0.5rem;
`

export const HeroH1 = styled.h1`
  color: ${theme.color.white};
  margin-bottom: 1rem;
`

export const HeroSub = styled.p`
  color: rgba(255, 255, 255, 0.85);
  max-width: 500px;
  margin-bottom: 0;
`

export const HeroList = styled.ul`
  list-style: none;
  margin: 0 0 2rem 0;
  padding: 0;

  li {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.4rem;

    &::before {
      content: "➜ ";
      margin-right: 5px;
      color: ${theme.color.baseLight};
      font-weight: 900;
    }
  }
`

// ─── SECTIONS ────────────────────────────────────────────────────────────────

export const SectionLight = styled.section`
  background-color: #f8f8f8;
  padding: 5rem 0;

  ${media.lessThan("medium")`
    padding: 3rem 0;
  `}
`

export const SectionWhite = styled.section`
  background-color: #fff;
  padding: 5rem 0;

  ${media.lessThan("medium")`
    padding: 3rem 0;
  `}
`

export const SectionDark = styled.section`
  background-color: #1a1a1a;
  padding: 5rem 0;

  ${media.lessThan("medium")`
    padding: 3rem 0;
  `}
`

export const SectionTitle = styled.h2`
  color: ${theme.color.base};
  margin-bottom: 0.5rem;
`

export const SectionLead = styled.p`
  color: ${theme.color.grey};
  margin-bottom: 2.5rem;
  max-width: 650px;
`

// ─── BUTTON ──────────────────────────────────────────────────────────────────

export const BtnPrimary = styled(Link)`
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

// ─── CTA (ciemna sekcja z wezwaniem do akcji) ────────────────────────────────

export const CtaWrapper = styled.div`
  text-align: center;
  padding: 4rem 1rem;
`

export const CtaTitle = styled.h2`
  color: ${theme.color.white};
  margin-bottom: 1rem;
`

export const CtaText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`
