import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
//DATA
import { list } from "../../../assets/data/pageStructure"
import { info } from "../../../assets/data/kontakt"
//STYLES
import { media } from "../../../utils/mediaquery"
import { CardWrapperMob, ContainerMob } from "../../../utils/utils"
import { theme } from "../../../utils/theme"
import FooterIks from "../footerIks/FooterIks"
import FooterHeader from "../footerHeader/FooterHeader"
//COMPONENTS

const Foot = styled.footer`
  background: rgb(41,37,37);
  background: linear-gradient(135deg, rgba(41,37,37,1) 50%, 
  rgba(77,28,28,1) 100%, 
  rgba(255,0,0,1) 100%);
`

const FooterWrapper = styled(ContainerMob)`
  margin: 0 auto;
  padding-top: 4rem;

  p,
  a {
    color: ${({ theme }) => theme.color.white};
  }

  a {
    white-space: pre-wrap;
  }
`

const FooterAdres = styled.div`
  ${media.lessThan("small")`
    display: none;
  `}

  p {
    :first-child {
      font-weight: 700;
    }
  }
`

const FooterKontakt = styled.div`
  text-align: center;
  a {
    font-weight: 700;
    transition: all 0.4s ease-in-out;

    &:hover {
      font-weight: 900;
      color: ${({ theme }) => theme.color.baseLight};
    }
  }
  div {
    margin-top: 2rem;
    a {
      font-size: 30px;
      margin: 0 1rem;
      span {
        display: none;
      }
    }
  }
`

const FooterLinki = styled.ul`
  text-align: right;
  list-style-type: none;
  line-height: 1;

  ${media.lessThan("small")`
    display: none;
  `}

  li {
    margin-bottom: 0.2rem;
  }
  a {
    font-weight: 400;
    line-height: 1;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    &:hover {
      font-weight: 500;
      color: ${({ theme }) => theme.color.baseLight};
    }
  }
`

export default function Footer() {

        return (
          <Foot id="footer">
            <FooterHeader/>
            <FooterWrapper>
              <CardWrapperMob xl="3" l="3" m="3" s="1" mb="0" pb="2rem">
                <FooterAdres>
                  <p>Adres</p>
                  <p>{info.nazwa}</p>
                  <p>
                    ul. {info.ulica} {info.numer}
                  </p>
                  <p>
                    {info.kodPocztowy} {info.miasto}
                  </p>
                  <p>Województwo {info.woj}</p>
                </FooterAdres>

                <FooterKontakt>
                  <a href="/kontakt">Kontakt</a>
                  <p>{info.tel}</p>
                  <p>{info.tel2}</p>
                  <p>{info.mail}</p>
                </FooterKontakt>

                <FooterLinki>
                  {list.map(item => (
                    <li key={item.name}>
                      <Link activeClassName="active" to={item.path}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </FooterLinki>
              </CardWrapperMob>
            </FooterWrapper>
            {
            //Footer IKS
            }
            <FooterIks/>
          </Foot>
        )
}
