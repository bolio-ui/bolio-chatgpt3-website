import React from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import {
  Section,
  Container,
  Grid,
  Text,
  Row,
  Col,
  Button,
  Link
} from '@bolio-ui/core'
import Base from 'src/templates/Base'

function Home() {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title={
          '404: Page not found | Bolio ChatGPT - Answer questions based on existing knowledge'
        }
        description={
          'Bolio ChatGPT it is easy to operate: just feed it with part of a text, and the model will generate another part, following a similar style and structure.'
        }
        openGraph={{
          url: `${router.pathname}`,
          title:
            '404: Page not found | Bolio ChatGPT - Answer questions based on existing knowledge',
          description:
            'Bolio ChatGPT it is easy to operate: just feed it with part of a text, and the model will generate another part, following a similar style and structure.',
          images: [
            {
              url: '/img/cover.png',
              width: 1200,
              height: 630,
              alt: '404: Not | Bolio ChatGPT - Answer questions based on existing knowledge'
            }
          ]
        }}
      />
      <Base>
        <Section py={4}>
          <Container>
            <Grid.Container justify="center">
              <Row justify="space-around" style={{ textAlign: 'center' }}>
                <Col span={10}>
                  <Text h1 font={6}>
                    Oops!
                  </Text>
                  <Text h2>404 - PAGE NOT FOUND</Text>
                  <Text p font={1.2}>
                    The page you are looking for might have been removed had its
                    name changed or is temporarily unavailable.
                  </Text>
                </Col>
              </Row>
            </Grid.Container>
            <Grid.Container gap={2} justify="center" alignItems="center">
              <Grid xs={6} sm={6} md={2}>
                <Link href="/" target="_blank" width="100%">
                  <Button type="secondary" rounded width="100%">
                    Go to homepage
                  </Button>
                </Link>
              </Grid>
            </Grid.Container>
          </Container>
        </Section>
      </Base>
    </>
  )
}

export default Home
