import styled from "styled-components"
import { media } from "./mediaquery"
import { theme } from "./theme"

export const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.xl || 7}, 1fr);

  ${media.lessThan("large")`
    grid-template-columns: repeat(${props => props.l || 4}, 1fr);
    > div:nth-of-type(2),
    > div:nth-of-type(7),
    > div:nth-of-type(6) {
      display: none;
    }
    `}

  ${media.lessThan("medium")`
    grid-template-columns: repeat(${props => props.s || 3}, 1fr);
    > div:nth-of-type(4) {
      display: none;
    }
    `}

  ${media.lessThan("small")`
    grid-template-columns: repeat(${props => props.xs || 2}, 1fr);
    > div:nth-of-type(5) {
      display: none;
    }
    `}
`

export const ContainerMob = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1600px;
  position: relative;
  z-index: 10;
  margin-top: ${props => props.mt || "0rem"};
  margin-bottom: ${props => props.mb || "0rem"};

  ${media.lessThan("huge")`
    max-width: 1200px;
  `}

  ${media.lessThan("large")`
    max-width: 960px;
  `}

  ${media.lessThan("medium")`
    margin-top: ${props => props.mtMobile || "0rem"};
    max-width: 720px;
    padding-right: 1rem;
    padding-left: 1rem;
  `}

  ${media.lessThan("small")`
    margin-top: ${props => props.mtMobile || "0rem"};
    max-width: 540px;
    padding-right: 1rem;
    padding-left: 1rem;
  `}
`

export const Container = styled(ContainerMob)``

export const CardWrapperMob = styled(ContainerMob)`
  display: grid;
  column-gap: ${props => props.colGap || "0"};
  row-gap: ${props => props.rowGap || "0"};
  margin-top: ${props => props.mt || "0rem"};
  margin-bottom: ${props => props.mb || "0rem"};
  padding-top: ${props => props.pt || "0"};
  padding-bottom: ${props => props.pb || "0"};
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(${props => props.xl || 5}, 1fr);

  ${media.lessThan("large")`
    grid-template-columns: repeat(${props => props.l || 4}, 1fr);
  `}

  ${media.lessThan("medium")`
    grid-template-columns: repeat(${props => props.m || 3}, 1fr);
  `}

  ${media.lessThan("small")`
    grid-template-columns: repeat(${props => props.s || 2}, 1fr);
  `}
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: ${props => props.mb || "5rem"};

  h1,
  p {
    text-align: center;
  }
  h1 {
    font-family: ${theme.font.special};
  }
  p {
    margin-top: 0.5rem;
    color: ${theme.color.white};
    max-width: 500px;
    //font-size: 18px;
  }

  ${media.lessThan("large")`
  //margin-top: 340px;
  `}

  ${media.lessThan("medium")`
  margin-top: 80px;
  `}

  ${media.lessThan("small")`
  margin-top: 50px;
  `}
`

export const TabWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;

  ${media.lessThan("medium")`
  grid-template-columns: 150px 1fr;
  `}

  ${media.lessThan("small")`
  grid-template-columns: 100px 1fr;
  `}
`

export const TabMenu = styled.div`
  border-right: 1px solid ${theme.color.base};
  transition: all 0.5s ease-in-out;

  li {
    display: flex;
    align-items: center;
    cursor: pointer;
    list-style-type: none;
    list-style-position: outside;
    margin-left: 0;
    height: 60px;
    transition: all 0.5s ease-in-out;
    color: ${theme.color.lightgrey};
    padding-right: 1rem;

    &.active,
    &:hover {
      font-weight: 700;
      border-right: 6px solid ${theme.color.base};
      color: ${theme.color.base};
    }
  }
`

export const Tab = styled.div`
  padding-left: 2rem;
  padding-top: 1rem;
  ${media.lessThan("medium")`
    padding-left: 1rem;
  `}
  P {
    white-space: pre-wrap;
  }

  ul {
    margin-bottom: 2rem;
  }

  li {
    list-style-position: outside;
    margin-inline-start: 2rem;
    margin-inline-end: 0px;
    padding-inline-start: 2rem;
    margin-bottom: 0.2rem;

    ${media.lessThan("medium")`
    margin-inline-start: 1rem;
    padding-inline-start: 1rem;
    margin-bottom: 0.1rem;
  `}

    ${media.lessThan("small")`
  margin-inline-start: 0.7rem;
    padding-inline-start: 0.7rem;
    margin-bottom: 0.1rem;
  `}
  }
`

export const TabIntro = styled.div`
  margin-bottom: 3rem;
`
export const Section = styled.section`
  padding-top: ${props => props.pt || "0rem"};
  padding-bottom: ${props => props.pb || "0rem"};
  background-color: ${props => props.bgcolor || "transparent"};
  position: relative;

  ${media.lessThan("huge")`
    //margin-top: 20px;
  `}

  ${media.lessThan("large")`
    //margin-top: 300px;
  `}

  ${media.lessThan("medium")`
    //margin-top: 200px;
  `}

  ${media.lessThan("small")`
    //margin-top: 100px;
  `}
`

export const Section2 = styled.section`
  padding-top: ${props => `${props.pt}rem` || "0rem"};
  padding-bottom: ${props => `${props.pb}rem` || "0rem"};
  background-color: ${props => props.bgcolor || "transparent"};
  position: relative;
  margin-top: ${props => props.mt || "0"};
  margin-bottom: ${props => props.mb || "0"};

  ${media.lessThan("huge")`
    padding-top: ${props => `${props.pt}rem` || "0rem"};
    padding-bottom: ${props => `${props.pb}rem` || "0rem"};
    `}

  ${media.lessThan("large")`
    padding-top: ${props => `${props.pt}rem` || "0rem"};
    padding-bottom: ${props => `${props.pb}rem` || "0rem"};
    `}

  ${media.lessThan("medium")`
    padding-top: ${props => `${props.pt - 3}rem` || "0rem"};
    padding-bottom: ${props => `${props.pb}rem` || "0rem"};
    `}

  ${media.lessThan("small")`
    padding-top: ${props => `${props.pt - 4}rem` || "0rem"};
    padding-bottom: ${props => `${props.pb}rem` || "0rem"};
  `}
`
export const Baner = styled.div`
  position: absolute;
  width: 100%;
  height: 450px;
  overflow: hidden;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  ${media.lessThan("medium")`
    height: 360px;
  `}

  ${media.lessThan("small")`
    height: 240px;
    > div {
      height: 240px;
    }
  `}

  :before {
    content: "";
    background: rgb(0, 46, 12);
    background: linear-gradient(
      180deg,
      rgba(49, 43, 43, 0.7) 0%,
      rgba(77, 0, 0, 0.2) 70%,
      rgba(143, 11, 11, 0.1) 100%
    );
    position: absolute;
    height: 450px;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 2;
  }
`
