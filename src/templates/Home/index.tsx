import React from 'react'
import { Section, Container } from '@bolio-ui/core'
import Base from 'src/templates/Base'
import Hero from 'src/components/Hero'
import IconsGallery from 'src/components/IconsGallery'

function Home() {
  return (
    <Base>
      <Hero
        content={{
          title: 'Bolio Chat GPT',
          description:
            'Enter a text, and the model will generate another part, following a similar style and structure. 🪄⚡️'
        }}
      />
      <Section pb={4}>
        <Container>
          <IconsGallery />
        </Container>
      </Section>
    </Base>
  )
}

export default Home
