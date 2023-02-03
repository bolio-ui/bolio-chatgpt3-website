import React from 'react'
import { Section, Container } from '@bolio-ui/core'
import Base from 'src/templates/Base'
import Hero from 'src/components/Hero'
import IconsGallery from 'src/components/IconsGallery'
import SectionDemonstration from './SectionDemonstration'
import SectionCommunity from './SectionCommunity'

function Home() {
  return (
    <Base>
      <Hero
        content={{
          title: 'Bolio Icons',
          description:
            'Collection of simply beautiful icons. Each icon is designed with an emphasis on simplicity, consistency and readability. 🥷🏼'
        }}
      />
      <Section pb={4}>
        <Container>
          <IconsGallery />
        </Container>
      </Section>
      <SectionDemonstration />
      <SectionCommunity />
    </Base>
  )
}

export default Home
