import React from "react"
import styled, { ThemeProvider } from "styled-components"
//STYLES
import { GlobalStyle } from "../utils/globalStye"
import { theme } from "../utils/theme"
import { media } from "../utils/mediaquery"
//DATA
import { info } from "../assets/data/kontakt"
//COOKIES
// import Cookie from "../components/cookie/Cookie"
//NAVBAR
import Navbar from "../components/navbar/Navbar_Container"
//FOOTER
import Footer from "../components/footer/footer/footer"
import FooterHeader from "../components/footer/footerHeader/FooterHeader"
import FooterIks from "../components/footer/footerIks/FooterIks"

const Children = styled.div`
  //margin-top: 600px;
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

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Navbar />
        {/* <NavbarJezus /> */}
        <Children>{props.children}</Children>
        {/* 
        
        <Cookie />
        
        */}
        <Footer />
      </div>
    </ThemeProvider>
  )
}
export default Layout
