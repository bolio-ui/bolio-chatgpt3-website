import React, { useCallback, useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { BolioUIProvider, CssBaseline } from '@bolio-ui/core'
import { SettingsContext, themes, ThemeType } from 'src/context/SettingsContext'
import Favicon from 'src/components/Favicon'
import Navigation from 'src/components/Navigation'
import SEO from '../../next-seo.config.js'

import { grayTheme } from 'src/theme'

function App({ Component, pageProps }: AppProps) {
  const [themeType, setThemeType] = useState<ThemeType>('light')

  useEffect(() => {
    document.documentElement.removeAttribute('style')
    document.body.removeAttribute('style')

    const theme = window.localStorage.getItem('theme') as ThemeType
    if (themes.includes(theme)) setThemeType(theme)
  }, [])

  const switchTheme = useCallback((theme: ThemeType) => {
    setThemeType(theme)
    if (typeof window !== 'undefined' && window.localStorage)
      window.localStorage.setItem('theme', theme)
  }, [])

  return (
    <>
      <Head>
        <title>
          Bolio ChatGPT - Answer questions based on existing knowledge
        </title>
        <meta
          name="description"
          content="Bolio ChatGPT it is easy to operate: just feed it with part of a text, and the model will generate another part, following a similar style and structure."
        />
        <Favicon />
      </Head>
      <BolioUIProvider themes={[grayTheme]} themeType={themeType}>
        <SettingsContext.Provider value={{ themeType, switchTheme }}>
          <DefaultSeo {...SEO} />
          <CssBaseline />
          <style global jsx>{`
            body {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              font-size: 1rem;
              line-height: 1.5;
              margin: 0;
              padding: 0;
              min-height: 100%;
              position: relative;
              overflow-x: hidden;
              font-family: 'Inter', -apple-system, BlinkMacSystemFont,
                'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
                'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            }
          `}</style>
          <Navigation />
          <Component {...pageProps} />
        </SettingsContext.Provider>
      </BolioUIProvider>
    </>
  )
}

export default App
