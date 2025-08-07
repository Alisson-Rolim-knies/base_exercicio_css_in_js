import styled, { createGlobalStyle } from 'styled-components'
import { Theme } from './theme'

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props: any) => props.theme.fonts.primary};
    list-style: none;
  }

  body {
    padding-bottom: 120px;
  }
`

export const Container = styled.div<{ theme: Theme }>`
  max-width: ${(props: any) => props.theme.container.maxWidth};
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${(props: any) => props.theme.breakpoints.tablet}) {
    max-width: ${(props: any) => props.theme.container.maxWidthMobile};
  }
`
