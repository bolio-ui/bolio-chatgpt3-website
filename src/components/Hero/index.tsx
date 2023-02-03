import React from 'react'
import {
  Text,
  Container,
  Grid,
  Row,
  Col,
  Section,
  Button,
  Link
} from '@bolio-ui/core'

interface Props {
  content: { title: string; description: string }
}

export type HeroProps = Props

function Hero({ content }: Props) {
  return (
    <Section py={4}>
      <Container>
        <Grid.Container justify="center">
          <Row justify="space-around" style={{ textAlign: 'center' }}>
            <Col span={9}>
              <svg
                viewBox="0 0 500 500"
                style={{
                  color: '#c25fff',
                  height: '6rem',
                  width: '6rem',
                  verticalAlign: 'middle',
                  marginTop: '-16px',
                  marginBottom: '-16px'
                }}
              >
                <path
                  d="M88.21,182.47c-.42-1.33,0,2.25,1.71,5.09,26.52,44.72,52.28,89.92,80.06,133.85C208.53,382.33,285.9,401,348.22,366c62.55-35.15,87-111.85,55.95-175.35-31.52-64.39-104.55-92.59-171.89-66C184.51,143.51,137,162.89,88.21,182.47Z"
                  fill="currentColor"
                />
                <path
                  d="M82.65,298.07c-1.06-.9,1.22,1.89,4.16,3.4,46.26,23.71,92.14,48.25,139.06,70.62,65.07,31,140.5,5.63,174.59-57.21,34.22-63.06,14.07-141-46.06-178.19C293.44,99,216.61,114,173.78,172.39,143.4,213.8,113.47,255.54,82.65,298.07Z"
                  fill="currentColor"
                />
              </svg>
              <Text h1>{content.title}</Text>
              <Text p font={1.5} mt={0}>
                {content.description}
              </Text>
            </Col>
          </Row>
        </Grid.Container>
        <Grid.Container gap={2} justify="center" alignItems="center">
          <Grid xs={12} sm={6} md={2}>
            <Link
              href="https://bolio-ui.com/docs/components/icons/"
              target="_blank"
              width="100%"
            >
              <Button type="secondary-light" width="100%" rounded>
                Get Started
              </Button>
            </Link>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Link
              href="/download/bolio-ui-icons.zip"
              width="100%"
              target="_blank"
            >
              <Button rounded width="100%">
                Download Pack
              </Button>
            </Link>
          </Grid>
        </Grid.Container>
      </Container>
    </Section>
  )
}

export default Hero
