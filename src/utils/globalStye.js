import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"
import { media } from "./mediaquery"

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}

article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
    display: block;
}

body {
    background-color: transparent;
    font-size: 16px;
    font-family: ${({ theme }) => theme.font.main};
    color: ${({ theme }) => theme.color.font};
    font-weight: ${({ theme }) => theme.font.weight};
    line-height: 1.5;
    text-align: left;
    margin: 0;
    padding: 0;
    
}

html{
    font-size: 16px;
}

p {
    font-weight: ${({ theme }) => theme.font.weight};
    margin: 0;
    padding: 0;
}

p, a, li, label {
    color: ${theme.color.font};
    font-family: ${theme.font.main};
    font-weight: ${theme.font.weight};
    font-size: ${theme.font.size.p.xl};
    line-height: ${theme.font.lineH.p.xl};
    ${media.lessThan("huge")`
    line-height: ${theme.font.lineH.p.l};
    font-size: ${theme.font.size.p.l};
  `}
    ${media.lessThan("large")`
    line-height: ${theme.font.lineH.p.m};
    font-size: ${theme.font.size.p.m};
  `}

  ${media.lessThan("medium")`
  line-height: ${theme.font.lineH.p.s};
  font-size: ${theme.font.size.p.s};
  `}

  ${media.lessThan("small")`
  line-height: ${theme.font.lineH.p.xs};
  font-size: ${theme.font.size.p.sx};
  `}
}

sub,
sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
}

sub {
    bottom: -.25em;
}

sup {
    top: -.5em;
}

b, strong{
    font-weight: 700;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: ${({ theme }) => theme.font.header};
    color: ${({ theme }) => theme.color.heading};
    font-weight: ${props => props.weight || props.theme.font.weightH};
    margin: 0;
}

h1 {
    font-size: ${props => props.xl || props.theme.font.size.h1.xl};
    line-height: ${props => props.lineHeight || props.theme.font.lineH.h1.xl};
    ${media.lessThan("huge")`
    line-height: ${theme.font.lineH.h1.l};
    font-size: ${theme.font.size.h1.l};
  `}
    ${media.lessThan("large")`
    line-height: ${theme.font.lineH.h1.m};
    font-size: ${theme.font.size.h1.m};
  `}

  ${media.lessThan("medium")`
  line-height: ${theme.font.lineH.h1.s};
  font-size: ${theme.font.size.h1.s};
  `}

  ${media.lessThan("small")`
  line-height: ${theme.font.lineH.h1.xs};
  font-size: ${theme.font.size.h1.sx};
  `}
}

h2 {
    font-size: ${props => props.xl || props.theme.font.size.h2.xl};
    line-height: ${props => props.lineHeight || props.theme.font.lineH.h2.xl};
}

h3 {
    font-size: ${props => props.xl || props.theme.font.size.h3.xl};
    line-height: ${props => props.lineHeight || props.theme.font.lineH.h3.xl};
}

h4 {
    font-size: clamp(1.125rem, 0.595vw + 0.911rem, 1.625rem); //18-26
    line-height: 1.2;
}

h5 {
    font-size: ${props => props.xl || props.theme.font.size.h5.xl};
    line-height: ${props => props.lineHeight || props.theme.font.lineH.h5.xl};
  
}

h6 {
    font-size: ${props => props.xl || props.theme.font.size.h6.xl};
    line-height: ${props => props.lineHeight || 1.7};
  }

  ol, ul {
    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0rem;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    line-height: 1.5;
  }

ul {
    list-style-type: disc;
    list-style-position: outside;
}

li {
    color: ${({ theme }) => theme.color.font};
    font-family: ${({ theme }) => theme.font.main};
    margin-left: 0;
    margin-top: 0;
}

a {
    text-decoration: none;
    background-color: transparent;

    &:hover {
        color: ${({ theme }) => theme.color.sec1};
        text-decoration: none;
    }
}

label {
    color: ${props => props.theme.color.grey3};
  font-family: ${props => props.fontFamily || props.theme.font.main};
  text-transform: ${props => props.textTransform || "uppercase"};
  font-weight: 700;
  letter-spacing: 0.4rem;
  font-size: ${props => props.l || props.theme.font.size.l.xl};
  line-height: 1.6;

  ${media.lessThan("huge")`
  font-size: ${props => props.l || props.theme.font.size.l.l};
    line-height: ${props => props.lineHeight || 1.6};
  `}

  ${media.lessThan("large")`
  font-size: ${props => props.m || props.theme.font.size.l.m};
    line-height: ${props => props.lineHeight || 1.5};
  `}

  ${media.lessThan("medium")`
  font-size: ${props => props.s || props.theme.font.size.l.s};
    line-height: ${props => props.lineHeight || "1,5"};
  `}

  ${media.lessThan("small")`
  font-size: ${props => props.xs || props.theme.font.size.l.xs};
    line-height: ${props => props.lineHeight || "1,5"};
  `}
}

img {
    vertical-align: middle;
    border-style: none;
}

svg {
    overflow: hidden;
    vertical-align: middle;
}

table {
    border-collapse: collapse;
}

button {
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: ${({ theme }) => theme.color.base1};
    color: ${({ theme }) => theme.color.white};
    font-family: ${({ theme }) => theme.font.main};
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out,
        transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;

    :hover {
        background-color: ${({ theme }) => theme.color.sec1};
        border-style: none;
    }

    :focus {
        border: 1px solid ${({ theme }) => theme.color.base1};
    }
    :active {
        //transform: scale(0.99);
        background-color: ${({ theme }) => theme.color.sec1};
    }
}

`
