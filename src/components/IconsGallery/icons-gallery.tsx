import React, { useState } from 'react'
import {
  Input,
  useInput,
  Modal,
  useModal,
  Snippet,
  Grid,
  Container,
  Text
} from '@bolio-ui/core'
import * as Icons from '@bolio-ui/icons'
import IconsCell, { getImportString } from './icons-cell'

const ImportSnippet: React.FC<React.PropsWithChildren<unknown>> = ({
  children
}) => {
  return (
    <Snippet
      toastText="Code copied!"
      toastType="secondary"
      text={children.toString()}
      rounded
    />
  )
}

const IconsGallery: React.FC<unknown> = () => {
  const { setVisible, bindings: modalBindings } = useModal()
  const { state: query, bindings } = useInput('')
  const [importStr, setImportStr] = useState({
    title: '',
    single: '',
    normal: ''
  })

  const icons = Object.entries(Icons).filter(
    ([name]) => !query || name.toLowerCase().includes(query.toLowerCase())
  )

  const onCellClick = (name: string) => {
    const { single, normal } = getImportString(name)
    setImportStr({ title: name, single, normal })
    setVisible(true)
  }

  return (
    <Container>
      <Grid.Container justify="center">
        <Grid xs={12} md={6}>
          <Input
            width="100%"
            icon={<Icons.Search />}
            placeholder="Search icon..."
            mb={2}
            height={1.5}
            rounded
            {...bindings}
          />
        </Grid>
      </Grid.Container>
      <Grid.Container justify="center">
        {icons.map(([name, component], index) => (
          <IconsCell
            name={name}
            component={component}
            key={`${name}-${index}`}
            onClick={onCellClick}
          />
        ))}
        {!icons.length && (
          <Grid my={2}>
            <Text desc>No results found for {`"${query}"`}</Text>
          </Grid>
        )}
      </Grid.Container>

      <Modal width="30rem" {...modalBindings}>
        <Modal.Title style={{ fontWeight: 600 }}>{importStr.title}</Modal.Title>
        <Modal.Content>
          <p>{'Import:'}</p>
          <ImportSnippet>{importStr.normal}</ImportSnippet>
          <p>{'Import single component:'}</p>
          <ImportSnippet>{importStr.single}</ImportSnippet>
        </Modal.Content>
      </Modal>
    </Container>
  )
}

export default IconsGallery
