import { createGlobalStyle, ThemeProvider } from "styled-components";
import Script from "next/script";
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
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
