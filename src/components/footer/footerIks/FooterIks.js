import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { ContainerMob } from "./../../../utils/utils"
import { theme } from "../../../utils/theme"

const Stopka = styled.div`
  padding-bottom: 2rem;
  text-align: center;
  background-color: ${theme.color.base};
  background-color: transparent;

  a,
  p {
    color: ${({ theme }) => theme.color.white};
    opacity: 0.3;
    font-size: 16px;
    line-height: 1.3;
  }

  p {
    margin-bottom: .5rem;
    margin-top: 1rem;
  }

  a {
    font-weight: 400;
    opacity: 0.5;
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease-in-out;
    :hover {
      font-weight: 500;
      opacity: 0.7;
    }

    > div {
      margin-right: 1rem;
    }
  }

  hr {
    margin-bottom: 2rem;
    margin-top: 0;
    opacity: 0.3;
    border: 0;
    height: 0;
    border-bottom: 1px solid ${theme.color.white};
  }
`

const FooterIks = props => {
  return (
    <Stopka>
      <ContainerMob>
        <hr />
      </ContainerMob>
      <p>
        {new Date().getFullYear()} © Wszystkie prawa zastrzeżone
      </p>

      <a href="https://iksdesign.pl/" target="blank">
        <StaticImage
          src="../../../assets/images/logo/logo_white_iks.png"
          alt="Logo"
          placeholder="blurred"
          layout="fixed"
          height={20}
          transformOptions={{ fit: "contain" }}
        />
        IKS Design
      </a>
    </Stopka>
  )
}
export default FooterIks
