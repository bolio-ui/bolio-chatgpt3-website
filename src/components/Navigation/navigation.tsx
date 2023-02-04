import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  Grid,
  Spacer,
  Button,
  Link,
  useTheme,
  useBodyScroll
} from '@bolio-ui/core'
import { Sun, Moon, Github, Instagram, Twitter } from '@bolio-ui/icons'
import { useSettings } from 'src/context/SettingsContext'
import Logo from 'src/components/Logo'

const Navigation: React.FC = () => {
  const theme = useTheme()
  const settings = useSettings()
  const router = useRouter()
  const [expanded, setExpanded] = useState<boolean>(false)
  const [, setBodyHidden] = useBodyScroll(null, { delayReset: 300 })

  useEffect(() => {
    setBodyHidden(expanded)
  }, [expanded, setBodyHidden])

  useEffect(() => {
    const handleRouteChange = () => {
      setExpanded(false)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <>
      <nav className="menu_wrapper">
        <Container fluid>
          <div className="menu">
            <Grid.Container gap={1} justify="center">
              <Grid
                xs={6}
                md={6}
                justify="flex-start"
                style={{ marginTop: '8px' }}
              >
                <Logo name="Bolio ChatGPT" />
              </Grid>
              <Grid xs={6} md={6} justify="flex-end">
                <div className="controls">
                  <>
                    <Link
                      href="https://github.com/bolio-ui/bolio-ui"
                      target="_blank"
                    >
                      <Button
                        w="28px"
                        h="28px"
                        py={0}
                        px={0}
                        className="theme-button"
                        aria-label="Github Bolio UI"
                        type="abort"
                      >
                        <Github
                          fontSize={16}
                          color={theme.palette.foreground}
                        />
                      </Button>
                    </Link>
                    <Link
                      href="https://www.twitter.com/bolio_ui/"
                      target="_blank"
                    >
                      <Button
                        w="28px"
                        h="28px"
                        py={0}
                        px={0}
                        className="theme-button"
                        aria-label="Twitter Bolio UI"
                        type="abort"
                      >
                        <Twitter
                          fontSize={16}
                          color={theme.palette.foreground}
                        />
                      </Button>
                    </Link>
                    <Link
                      href="https://www.instagram.com/bolio.ui/"
                      target="_blank"
                    >
                      <Button
                        w="28px"
                        h="28px"
                        py={0}
                        px={0}
                        className="theme-button"
                        aria-label="Instagram Bolio UI"
                        type="abort"
                      >
                        <Instagram
                          fontSize={16}
                          color={theme.palette.foreground}
                        />
                      </Button>
                    </Link>
                    <Button
                      w="28px"
                      h="28px"
                      py={0}
                      px={0}
                      aria-label="Toggle Gray mode"
                      className="theme-button"
                      type="abort"
                      onClick={() =>
                        settings.switchTheme(
                          theme.type === 'light' ? 'gray' : 'light'
                        )
                      }
                    >
                      {theme.type === 'light' ? (
                        <Moon fontSize={16} color={theme.palette.foreground} />
                      ) : (
                        <Sun fontSize={16} color={theme.palette.foreground} />
                      )}
                    </Button>
                    <Spacer w={1} />
                    <Link href="https://bolio-ui.com/" target="_blank">
                      <Button auto scale={0.75} rounded type="secondary">
                        Bolio UI 🥷🏼
                      </Button>
                    </Link>
                  </>
                </div>
              </Grid>
            </Grid.Container>
          </div>
        </Container>
      </nav>
      <style jsx>{`
        .menu_wrapper {
          height: 60px;
          position: relative;
          overflow: hidden;
          z-index: 99;
          border-bottom: 1px solid ${theme.palette.accents_2};
        }
        .menu_wrapper :global(.theme-button) {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          padding: 0;
        }

        .logo {
          padding: 0 ${theme.layout.gap};
          margin-bottom: 3px;
        }
        .tabs {
          padding: 0 ${theme.layout.gap};
          margin-bottom: 3px;
        }
        .tabs :global(.content) {
          display: none;
        }
        @media only screen and (max-width: ${theme.breakpoints.md.max}) {
          .tabs {
            display: none;
          }
        }

        .controls {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 50px;
        }
        .controls :global(.menu-toggle) {
          display: flex;
          align-items: center;
          height: 50px;
        }
      `}</style>
    </>
  )
}

export default Navigation
