import React from "react"
import { StaticImage } from "gatsby-plugin-image"
//DATA
import { info, godziny } from "../assets/data/kontakt"
//STYLES
import styled from "styled-components"
import { media } from "../utils/mediaquery"
import { Section2, ContainerMob, Baner, Heading } from "../utils/utils"
//COMPONENTS
import { Head as SeoHead } from "../components/seo/Seo"

const Info = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 7rem;

  ${media.lessThan("small")`
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
  `}

  p {
    white-space: pre-wrap;
  }

  iframe {
    //filter: grayscale(100%);
    ${media.lessThan("small")`
      display: none;
    `}
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  b {
    margin-right: 1rem;
  }

  label {
    margin-bottom: 1rem;
    margin-top: 3rem;
  }
`

const MapMobile = styled.div`
  margin-top: 4rem;
  > div {
    height: 300px;
  }

  iframe {
    //filter: grayscale(100%);
    height: 300px;
  }

  ${media.greaterThan("medium")`
    display: none;
  `}
`

export default function Kontakt({ data }) {
  return (
    <div>
      <Baner>
        <StaticImage
          src="../assets/images/baner4.jpg"
          alt="Szkółka drzew z lotu ptaka"
          layout="fullWidth"
          objectFit="cover"
          quality={100}
          placeholder="blurred"
        />
      </Baner>
      <ContainerMob mt="4rem" mtMobile=".5rem">
        <Heading className="white">
          <h1>Zostańmy w kontakcie!</h1>
          <p>
            Skontaktuj się z nami, z chęcią odpowiemy na Twoje pytania.
            <br />
            <b>Czekamy na Ciebie.</b>
          </p>
        </Heading>
      </ContainerMob>
      <Section2
        pt={6}
        pb={3}
        tabIndex="0"
        role="contentinfo"
        ariaLabel="Dane kontaktowe i mapa dojazdu"
      >
        <ContainerMob>
          <Info>
            <iframe
              title="map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=18.95487070083618%2C49.95783977359637%2C18.969032764434818%2C49.964120555789364&amp;layer=mapnik&amp;marker=49.960980267116625%2C18.961951732635498"
            />

            <TextWrapper>
              <label>Kontakt</label>
              <h4>+48 {info.tel}</h4>
              <h4>{info.mail}</h4>

              <label>Adres</label>
              <p>
                <b>{info.nazwa}</b>
                <br />
                {info.nazwa2}
              </p>
              <p>
                ul. {info.ulica} {info.nrBud}
              </p>
              <p>
                {info.kod} {info.miasto}
              </p>
              <p>{info.woj}</p>
              <p>{info.kraj}</p>
            </TextWrapper>
          </Info>

          <MapMobile>
            <iframe
              title="mapMobile"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=18.95487070083618%2C49.95783977359637%2C18.969032764434818%2C49.964120555789364&amp;layer=mapnik&amp;marker=49.960980267116625%2C18.961951732635498"
            />
          </MapMobile>
        </ContainerMob>
      </Section2>
    </div>
  )
}
export const Head = () => (
  <SeoHead
    title="Kontakt - EmtechQ"
    description="EmtechQ - profesjonalne usługi spawalnicze i transportowe."
  />
)
