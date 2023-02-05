import React, { useState, useEffect } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import {
  Text,
  Button,
  useTheme,
  Card,
  Grid,
  Container,
  Tabs,
  useToasts,
  Loading
} from '@bolio-ui/core'
import {
  ChevronsRight as ChevronsRightIcon,
  ChevronsLeft as ChevronsLeftIcon,
  Compass as CompassIcon,
  Star as StarIcon,
  AlertTriangle as AlertTriangleIcon
} from '@bolio-ui/icons'
import { useMediaQuery } from 'src/hooks/useMediaQuery'
import Base from 'src/templates/Base'
import Prompt from 'src/components/Prompt'
import Completion from 'src/components/Completion'

function Home() {
  const { setToast } = useToasts()
  const { palette, type: themeType } = useTheme()

  const [loading, setLoading] = useState(false)

  const [chatResponse, setChatResponse] = useState([])
  const [conversation, setConversation] = useState<string[]>([])
  const promptOptions = `Respond in markdown and use a codeblock with the language if there is code.`
  const [initialText] = useState(
    'Say something and Bolio ChatGPT makes it happen... 🪄✨'
  )
  const [loaderText] = useState('Making it happen 🪄 ✨✨✨')

  const [threadSize] = useState(3)

  const [tabValue, setTabValue] = useState<string>('examples')
  const [editorCollapsed, setEditorCollapsed] = useState(false)
  const isMobile = useMediaQuery(650)

  useEffect(() => {
    setTabValue(tabValue)
  }, [tabValue, setTabValue])

  useEffect(() => {
    setEditorCollapsed(isMobile)
  }, [isMobile])

  const collapseEditor = () => setEditorCollapsed(true)

  const unCollapseEditor = () => setEditorCollapsed(false)

  const containerClassName =
    'container' + (editorCollapsed ? ' collapsed-container' : '')

  const style = editorCollapsed ? { width: '100%' } : {}

  const onSubmit = async (question) => {
    setLoading(true)

    try {
      const configuration = new Configuration({
        apiKey: process.env.NEXT_OPEN_AI_KE
      })

      const openai = new OpenAIApi(configuration)

      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${promptOptions}${conversation}\nUser: ${question}.\n`,
        top_p: 1,
        max_tokens: 100,
        temperature: 0.5,
        n: 1,
        stream: false
      })

      const newChat = {
        botResponse: response.data.choices[0].text,
        promptQuestion: question,
        totalTokens: response.data.usage.total_tokens
      }

      setLoading(false)
      setChatResponse([...chatResponse, newChat])
    } catch (error) {
      setLoading(false)
      setToast({
        text: error.response.data.error.message,
        type: 'secondary',
        delay: 3000
      })
      console.log(error.response)
    }
  }

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [chatResponse])

  useEffect(() => {
    if (chatResponse.length > threadSize) {
      const newArray = [...chatResponse]
      newArray.splice(0, newArray.length - threadSize)
      setConversation(
        newArray.map((chat) => `${chat.promptQuestion}\n${chat.botResponse}\n`)
      )
    } else {
      setConversation(
        chatResponse.map(
          (chat) => `${chat.promptQuestion}\n${chat.botResponse}\n`
        )
      )
    }
  }, [chatResponse, threadSize])

  const forPrompt = { onSubmit, loading }

  return (
    <Base>
      <div className="wrapper" style={style}>
        <div className="graph">
          <div className="content-list">
            {chatResponse.length ? (
              chatResponse.map((item, index) => (
                <Completion {...item} key={index} />
              ))
            ) : !loading ? (
              <Text h3 style={{ textAlign: 'center' }}>
                {initialText}
              </Text>
            ) : null}

            {loading && (
              <Loading type="warning" style={{ width: '100%' }}>
                {loaderText}
              </Loading>
            )}
          </div>
        </div>
        <Prompt {...forPrompt} />
      </div>
      <div id="editor-container" className={containerClassName}>
        <Tabs
          value={tabValue}
          onChange={(value: string) => setTabValue(value)}
          hideDivider
        >
          <div className="content" id="editor-content">
            <Tabs.Item
              label={
                <>
                  <CompassIcon /> Examples
                </>
              }
              value="examples"
            >
              <Container>
                <Grid.Container gap={2} justify="center">
                  <Grid xs={12}>
                    <Card w="100%">
                      <Text p>"Explain quantum computing in simple terms"</Text>
                    </Card>
                  </Grid>
                  <Grid xs={12}>
                    <Card w="100%">
                      <Text p>"Explain quantum computing in simple terms"</Text>
                    </Card>
                  </Grid>
                  <Grid xs={12}>
                    <Card w="100%">
                      <Text p>"Explain quantum computing in simple terms"</Text>
                    </Card>
                  </Grid>
                </Grid.Container>
              </Container>
            </Tabs.Item>
            <Tabs.Item
              label={
                <>
                  <StarIcon /> Capabilities
                </>
              }
              value="capabilities"
            >
              <Container>
                <Grid.Container gap={2} justify="center">
                  <Grid xs={12}>
                    <Card w="100%">
                      <Text p>Trained to decline inappropriate requests</Text>
                    </Card>
                  </Grid>
                </Grid.Container>
              </Container>
            </Tabs.Item>
            <Tabs.Item
              label={
                <>
                  <AlertTriangleIcon /> Limitations
                </>
              }
              value="limitations"
            >
              <Container>
                <Grid.Container gap={2} justify="center">
                  <Grid xs={12}>
                    <Card w="100%">
                      <Text p>
                        May occasionally generate incorrect information
                      </Text>
                    </Card>
                  </Grid>
                  <Grid xs={12}>
                    <Card w="100%">
                      <Text p>
                        May occasionally produce harmful instructions or biased
                        content
                      </Text>
                    </Card>
                  </Grid>
                  <Grid xs={12}>
                    <Card w="100%">
                      <Text p>
                        Limited knowledge of world and events after 2021
                      </Text>
                    </Card>
                  </Grid>
                </Grid.Container>
              </Container>
            </Tabs.Item>
          </div>
        </Tabs>
        <footer onClick={collapseEditor}>
          <ChevronsRightIcon color={palette.accents_5} fontSize={20} />
        </footer>
      </div>
      {editorCollapsed && (
        <span className="uncollapse-btn">
          <Button
            iconRight={<ChevronsLeftIcon />}
            auto
            shadow
            onClick={unCollapseEditor}
          />
        </span>
      )}
      <style jsx>{`
        .wrapper {
          width: calc(100% - 400px);
          height: calc(100vh - 64px);
          background: ${palette.accents_1};
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: width 0.3s ease-out;
        }
        .graph {
          flex: 1;
          display: flex;
          overflow: auto;
          border-bottom: 1px solid ${palette.accents_2};
        }
        .graph ::-webkit-scrollbar {
          -webkit-appearance: none;
          width: 7px;
          height: 6px;
        }
        .graph ::-webkit-scrollbar-thumb {
          border-radius: 4px;
          background-color: ${themeType === 'light'
            ? 'rgba(0 ,0 ,0 , 0.5)'
            : 'rgba(255, 255, 255, 0.25)'};
        }
        .content-list {
          flex: 1;
          margin: auto;
          padding: 30px;
        }

        .container {
          flex: 1;
          position: fixed;
          top: 62px;
          right: 0;
          height: calc(100% - 64px);
          width: 400px;
          border-left: 1px solid ${palette.accents_2};
          transition: transform 0.3s ease-out;
        }
        .collapsed-container {
          transform: translateX(400px);
        }

        footer {
          height: 45px;
          text-align: center;
          line-height: 45px;
          border-top: 1px solid ${palette.accents_2};
          cursor: pointer;
        }
        footer :global(svg) {
          vertical-align: middle;
        }

        .uncollapse-btn :global(button) {
          position: fixed;
          right: 24px;
          bottom: 24px;
          background-color: ${palette.accents_1};
          z-index: 1;
        }
        .uncollapse-btn :global(svg) {
          width: 20px;
          height: 20px;
        }
        .container > :global(.tabs) {
          height: calc(100% - 45px);
        }
        .container > :global(.tabs > .content) {
          height: calc(100% - 45px);
        }
        .content {
          position: relative;
          height: calc(100% - 45px);
          overflow-y: auto;
        }
        .container > :global(.tabs > header) {
          padding: 0 12px;
        }
        .container > :global(.tabs > header .highlight) {
          display: none;
        }
        .container :global(.tabs > header .tab) {
          width: 33.3%;
          margin: 0;
          justify-content: center;
          height: 45px;
        }
      `}</style>
    </Base>
  )
}

export default Home
