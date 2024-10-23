import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { media } from "../../utils/mediaquery"
//DATA
import { list } from "../../assets/data/pageStructure"
//STYLED
import { Container, ContainerMob } from "../../utils/utils"
//COMPONENTS
import NavMobile from "./navbarMobile/NavMobile"
import HamburgerMenuIcon from "./navbarMobile/HamburgerMenuIcon"
import LogoMobile from "./navbarMobile/LogoMobile"

const navbarItemCount = Object.keys(list).length
const navbarHeight = 80
const navbarMobileHeight = 50

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 20;
  height: ${`${navbarHeight}px`};
  width: 100%;
  transition: all 0.2s;

  &.scroll {
    background-color: white;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;

    hr {
      display: none;
    }
  }

  &.top {
    background-color: transparent;

    hr {
      margin-bottom: 0;
      margin-top: 0;
      opacity: ${props => props.hrOpacity || 1};
      border: 0;
      height: 0;
      border-top: 0;
      border-bottom: 0.5px solid rgba(255, 255, 255, 0.75);
    }
  }

  ${media.lessThan("small")`
    display: none;
  `}
`

const NavbarWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
`

const NavbarMobileWrapper = styled.div`
  background-color: white;
  height: ${`${navbarMobileHeight}px`};
  border-bottom: 1px solid black;
  ${media.greaterThan("medium")`
    display: none;
  `}
`

const NavbarItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${navbarItemCount}, minmax(115px, 1fr));
  justify-self: center;
`

const NavbarItem = styled(Link)`
  text-align: center;
  padding: 0 1rem;
  display: grid;
  align-items: center;
  width: 100%;
  white-space: pre-wrap;

  background-color: transparent;
  font-size: 20px;
  font-family: "Ubuntu";
  font-weight: 400;
  line-height: 1.1;
  transition: all 0.5s ease-in-out;

  ${media.lessThan("small")`
    font-size: 16px !important;
    padding: 0 0.5rem;
    border-bottom: none;
  `}

  &.top {
    color: #ffffff65;
    border-bottom: 6px solid transparent;

    ${media.lessThan("small")`
      border-bottom: none;
      color: grey !important;
    `}
    &.active,
    &:hover {
      color: white;
      font-weight: 500;
      border-bottom: 6px solid transparent;

      ${media.lessThan("small")`
        border-bottom: none;
        color: ${({ theme }) => theme.color.base} !important;
      `}
    }
  }

  &.scroll {
    color: grey;
    border-bottom: 6px solid lightgrey;

    ${media.lessThan("small")`
      border-bottom: none;
      color: grey !important;
    `}

    &.active,
    &:hover {
      color: ${({ theme }) => theme.color.base};
      font-weight: 500;
      border-bottom: 6px solid ${({ theme }) => theme.color.base};

      ${media.lessThan("small")`
        border-bottom: none;
        color: ${({ theme }) => theme.color.base} !important;
      `}
    }
  }
`

const Logo = styled(Link)`
  padding: 0.7rem 0 0.7rem 0;
  display: flex;
  height: ${`${navbarHeight}px`};
  div {
    height: 100% !important;
  }
  p {
    line-height: ${`${navbarHeight}px`};
  }
`

function Navbar() {
  const [hasRan, setHasRan] = useState(false)
  const [click, setClick] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const handleClick = () => setClick(!click)

  const changeNavbar = () => {
    if (window.scrollY >= navbarHeight) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    if (!hasRan) {
      setHasRan(true)
      changeNavbar()
    }
    window.addEventListener("scroll", changeNavbar)
    return () => {
      window.removeEventListener("scroll", changeNavbar)
    }
  }, [navbar])

  const menu = list.map(item => (
    <>
      <NavbarItem
        className={navbar ? "scroll" : "top"}
        activeClassName="active"
        key={item.name}
        to={item.path}
        onClick={handleClick}
      >
        {item.name}
      </NavbarItem>
    </>
  ))

  return (
    <>
      {/*BELKA NAWIGACJI*/}
      <Nav
        className={navbar ? "scroll" : "top"}
        id="menu"
        role="navigation"
        aria-label="main navigation"
      >
        <NavbarWrapper>
          <Logo to="/">
            {navbar ? (
              <StaticImage
                src="../../assets/images/logo/logo.png"
                alt="Logo"
                layout="constrained"
                objectFit="contain"
                placeholder="blurred"
                height={50}
              />
            ) : (
              <StaticImage
                src="../../assets/images/logo/logo_white.png"
                alt="Logo"
                layout="constrained"
                objectFit="contain"
                placeholder="blurred"
                height={50}
              />
            )}
          </Logo>

          <NavbarItemWrapper>{menu}</NavbarItemWrapper>
        </NavbarWrapper>
        <ContainerMob>
          <hr />
        </ContainerMob>
      </Nav>
      <NavbarMobileWrapper>
        {/*LOGO MOBILNE*/}
        <LogoMobile click={click} />

        {/*MENU MOBILNE*/}
        {/* <motion.div
                animate={this.state.clicked ? "open" : "closed"}
                variants={variants}>

                <NavMobile>
                    {menu}
                </NavMobile>
            </motion.div> */}

        {click ? (
          <NavMobile top="0" opacity="1" clicked={click}>
            {menu}
          </NavMobile>
        ) : (
          <NavMobile></NavMobile>
        )}

        {/*IKONKA HAMBURGER MENU POJAWIAJĄCE SIĘ TYLKO NA MOBILNYCH*/}
        <HamburgerMenuIcon onClick={handleClick} clicked={click} />
      </NavbarMobileWrapper>
    </>
  )
}

export default Navbar
