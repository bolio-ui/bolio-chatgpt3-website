/* eslint-disable react/display-name */
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import NextLink from 'next/link'
import {
  Text,
  Link,
  Divider,
  Image,
  Card,
  Grid,
  Avatar,
  Row
} from '@bolio-ui/core'

interface Props {
  botResponse: string
  promptQuestion: string
  totalTokens: string
}

const Completion = ({ botResponse, promptQuestion, totalTokens }: Props) => {
  console.log('🚀 ~ file: index.tsx:23 ~ Completion ~ totalTokens', totalTokens)
  return (
    <Grid.Container gap={2}>
      <Grid xs direction="column">
        <Card mb={1}>
          <Row align="middle">
            <div style={{ marginRight: 10 }}>
              <Avatar
                src="https://i.pravatar.cc/150?img=60"
                isSquare
                width={1.2}
                height={1.2}
              />
            </div>
            <Text b>{promptQuestion}</Text>
          </Row>
        </Card>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
          {botResponse}
        </ReactMarkdown>
      </Grid>
    </Grid.Container>
  )
}

const components = {
  h1: ({ ...props }) => <Text h1 {...props} />,
  h2: ({ ...props }) => <Text h2 {...props} />,
  h3: ({ ...props }) => <Text h3 {...props} />,
  h4: ({ ...props }) => <Text h4 {...props} />,
  h5: ({ ...props }) => <Text h5 {...props} />,
  h6: ({ ...props }) => <Text h6 {...props} />,
  hr: ({ ...props }) => <Divider style={{ my: 3 }} {...props} />,
  img: ({ ...props }) => (
    <Image
      alt={props.alt}
      ratio="16/9"
      sx={{ borderRadius: 2, my: 5 }}
      {...props}
    />
  ),
  a: ({ ...props }) =>
    props.href.includes('http') ? (
      <Link target="_blank" rel="noopener" {...props} />
    ) : (
      <NextLink href={props.href} passHref>
        <Link {...props}>{props.children}</Link>
      </NextLink>
    )
}

export default Completion
