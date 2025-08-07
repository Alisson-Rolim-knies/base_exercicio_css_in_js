export const theme = {
  colors: {
    primary: '#a7727d',
    secondary: '#f9f5e7',
    light: '#eee'
  },
  fonts: {
    primary: 'Lato, sans-serif',
    secondary: 'Gloock, serif'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px'
  },
  container: {
    maxWidth: '1024px',
    maxWidthMobile: '80%'
  }
}

export type Theme = typeof theme
