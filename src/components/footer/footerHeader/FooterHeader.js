import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container, ImageGallery } from "../../../utils/utils"

const FooterHeaderWrapper = styled.div`
  background: ${props => props.theme.color.base1};
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3,
  p {
    color: ${props => props.theme.color.font};
  }
`

const FooterHeader = () => {
  return (
    <>
      <ImageGallery>
        <StaticImage
          src="../../../assets/images/8.jpg"
          alt="Logo"
          layout="fullWidth"
          objectFit="cover"
          placeholder="blurred"
          aspectRatio={1}
        />
        <StaticImage
          src="../../../assets/images/2.jpg"
          alt="Logo"
          layout="fullWidth"
          objectFit="cover"
          placeholder="blurred"
          aspectRatio={1}
        />
        <StaticImage
          src="../../../assets/images/3.jpg"
          alt="Logo"
          layout="fullWidth"
          objectFit="cover"
          placeholder="blurred"
          aspectRatio={1}
        />
        <StaticImage
          src="../../../assets/images/4.jpg"
          alt="Logo"
          layout="fullWidth"
          objectFit="cover"
          placeholder="blurred"
          aspectRatio={1}
        />
        <StaticImage
          src="../../../assets/images/5.jpg"
          alt="Logo"
          layout="fullWidth"
          objectFit="cover"
          placeholder="blurred"
          aspectRatio={1}
        />
        <StaticImage
          src="../../../assets/images/6.jpg"
          alt="Logo"
          layout="fullWidth"
          objectFit="cover"
          placeholder="blurred"
          aspectRatio={1}
        />
        <StaticImage
          src="../../../assets/images/9.jpg"
          alt="Logo"
          layout="fullWidth"
          objectFit="cover"
          placeholder="blurred"
          aspectRatio={1}
        />
      </ImageGallery>
      {/* <FooterHeaderWrapper>
        <Container>
    
        </Container>
      </FooterHeaderWrapper> */}
    </>
  )
}
export default FooterHeader
