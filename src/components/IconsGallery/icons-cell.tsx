import React from 'react'
import { Card, Grid, Row, Text } from '@bolio-ui/core'

export const getFileName = (name: string): string => {
  return name.replace(/^(.)/, (g) => g.toLowerCase())
}

export const getImportString = (name: string) => {
  const fileName = getFileName(name)
  const single = `import ${name} from '@bolio-ui/icons/${fileName}'`
  const normal = `import { ${name} } from '@bolio-ui/icons'`
  return {
    single,
    normal
  }
}

interface Props {
  component: React.ComponentType<unknown>
  name: string
  onClick: (name: string) => void
}

const IconsCell: React.FC<Props> = ({
  component: Component,
  name,
  onClick
}) => {
  return (
    <Grid xs={6} sm={4} md={2}>
      <Card
        key={name}
        onClick={() => onClick(name)}
        h="115px"
        w="100%"
        type="secondary"
        style={{
          margin: 10,
          cursor: 'pointer'
        }}
      >
        <Row
          justify="space-around"
          style={{
            textAlign: 'center',
            fontSize: 28,
            marginTop: 24,
            color: '#FFFFFF'
          }}
        >
          <Component />
        </Row>
        <Card.Content style={{ textAlign: 'center' }}>
          <Text b font="12px" style={{ color: '#FFFFFF' }}>
            {name}
          </Text>
        </Card.Content>
      </Card>
      <style jsx>{`
        .card-wrapper {
          width: 100%;
          cursor: pointer;
          margin: 15px;
          text-align: center;
        }
      `}</style>
    </Grid>
  )
}

export default React.memo(IconsCell)
