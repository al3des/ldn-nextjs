import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Layout from "../src/components/layout";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta property="og:title" content="La Doble Nelson | Cumbia" key='title' />
        <meta property="og:site_name" content="La Doble Nelson" />
        <meta property="og:url" content="https://ladoblenelson.de" />
        <meta
          property="og:description"
          content="La Doble Nelson. Cumbia band based in Berlin, Germany."
          key='description'
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ladoblenelson.vercel.app/logo.png"
          key='image'
        />
        <meta property="og:image:width" content="2900" />
        <meta property="og:image:height" content="1673" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>La Doble Nelson | Cumbia</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>

        <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
