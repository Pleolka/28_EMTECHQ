import React from "react"
import { ServerStyleSheet } from "styled-components"
import { wrapRootElement as wrap } from "./root-wrapper"

export const wrapRootElement = wrap

export const onRenderBody = ({ setHeadComponents }) => {
  const sheet = new ServerStyleSheet()

  try {
    // Pobierz wygenerowane style Styled Components
    const styleTags = sheet.getStyleElement()

    // Dodaj style Styled Components do <head>
    setHeadComponents([
      ...styleTags,
      // Preconnect do Google Fonts
      <link
        key="google-fonts-preconnect"
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />,
      <link
        key="google-fonts-preconnect-crossorigin"
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />,
      // Link do Google Fonts z `font-display: swap`
      <link
        key="google-fonts-stylesheet"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Yantramanav:wght@100;300;400;500;700;900&display=swap"
      />,
    ])
  } catch (error) {
    console.error("Error during SSR with styled-components:", error)
  } finally {
    sheet.seal()
  }
}
