import React from 'react'
import {
  Section,
  Text,
  Link,
  Container,
  Grid,
  Button,
  Spacer
} from '@bolio-ui/core'
import { Heart } from '@bolio-ui/icons'

function Footer() {
  return (
    <Section pt={1.5}>
      <Container>
        <Grid.Container
          justify="center"
          alignItems="center"
          alignContent="center"
          style={{ textAlign: 'center' }}
        >
          <Grid xs={12} md={5} justify="flex-start">
            <Text h6 my={0}>
              MADE & DESIGNED WITH
              <Heart
                fill="red"
                stroke="red"
                height={12}
                width={12}
                style={{ marginLeft: 3, marginRight: 3 }}
              />
              BY{' '}
              <Link
                href="https://brunnoandrade.com.br/"
                target="_blank"
                rel="noopener"
                underline
              >
                BRUNO ANDRADE
              </Link>
            </Text>
          </Grid>
          <Grid xs={12} md={7} justify="flex-end">
            <Text h6 my={0}>
              <Button type="abort" auto>
                Bolio Icons
              </Button>
              <Button type="abort" auto>
                Bolio Me
              </Button>
              <Button type="abort" auto>
                <Heart fill="red" stroke="red" height={12} width={12} />
                <Spacer w={0.5} /> Sponsor
              </Button>
            </Text>
          </Grid>
        </Grid.Container>
      </Container>
    </Section>
  )
}

export default Footer
