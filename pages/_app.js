import { createGlobalStyle, ThemeProvider } from 'styled-components'
import "./style.css";
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "F37 Jan Bold";
    src: url("/fonts/F37 Jan/F37 Jan/F37JanTest-Bold.otf");
  }
  @font-face {
    font-family: "F37 Jan Regular";
    src: url("/fonts/F37 Jan/F37 Jan/F37JanTest-Regular.otf");
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "F37 Jan Bold";
  }

  *, *::after, *::before {
    box-sizing: border-box;
    font-family: inherit;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
