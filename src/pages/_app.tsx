import React, { useCallback, useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { BolioUIProvider, CssBaseline } from '@bolio-ui/core'
import { SettingsContext, themes, ThemeType } from 'src/context/SettingsContext'
import Favicon from 'src/components/Favicon'
import Navigation from 'src/components/Navigation'
import SEO from '../../next-seo.config.js'

import { purpleTheme } from 'src/theme'

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
          Bolio Icons - Simplicity, consistency and readability icons
        </title>
        <meta
          name="description"
          content="Bolio Icons is a collection of simply beautiful icons. Each icon is designed with an emphasis on simplicity, consistency and readability."
        />
        <Favicon />
      </Head>
      <BolioUIProvider themes={[purpleTheme]} themeType={themeType}>
        <SettingsContext.Provider value={{ themeType, switchTheme }}>
          <DefaultSeo {...SEO} />
          <CssBaseline />
          <Navigation />
          <Component {...pageProps} />
        </SettingsContext.Provider>
      </BolioUIProvider>
    </>
  )
}

export default App
