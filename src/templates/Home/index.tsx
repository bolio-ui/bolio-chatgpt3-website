import React, { useState } from 'react'
import { Text, Button, useTheme, Spacer } from '@bolio-ui/core'
import Base from 'src/templates/Base'
import { ChevronsRight, ChevronsLeft, Heart } from '@bolio-ui/icons'
// import { Formik } from 'formik'
// import * as Yup from 'yup'
import RegexInput from './regex-input'

function Home() {
  const { palette, type: themeType } = useTheme()
  // const { setToast } = useToasts()
  const [editorCollapsed, setEditorCollapsed] = useState(false)

  // const initialValues = {
  //   text: ''
  // }

  // const validationSchema = Yup.object().shape({
  //   text: Yup.string()
  //     .required('Text is required field')
  //     .min(3, 'This field must have at least 3 characters')
  // })

  // const handleSubmit = React.useCallback((values, { resetForm }) => {}, [])

  const collapseEditor = () => setEditorCollapsed(true)

  const unCollapseEditor = () => setEditorCollapsed(false)

  const containerClassName =
    'container' + (editorCollapsed ? ' collapsed-container' : '')

  const style = editorCollapsed ? { width: '100%' } : {}

  return (
    <Base>
      <div className="wrapper" style={style}>
        <div className="graph">
          <div className="content-list">
            <Text>bbb</Text>
          </div>
        </div>
        <RegexInput />
      </div>
      <div id="editor-container" className={containerClassName}>
        <div className="content" id="editor-content">
          <Button type="abort" width="100%">
            Bolio UI
          </Button>
          <Button type="abort" width="100%">
            Bolio Icons
          </Button>
          <Button type="abort" width="100%">
            Bolio Me
          </Button>
          <Button type="abort" width="100%">
            <Heart fill="red" stroke="red" height={12} width={12} />
            <Spacer w={0.5} /> Sponsor
          </Button>
        </div>
        <footer onClick={collapseEditor}>
          <ChevronsRight color={palette.accents_5} fontSize={20} />
        </footer>
      </div>
      {editorCollapsed && (
        <span className="uncollapse-btn">
          <Button
            iconRight={<ChevronsLeft />}
            auto
            shadow
            onClick={unCollapseEditor}
          />
        </span>
      )}
      <style jsx>{`
        .wrapper {
          width: calc(100% - 275px);
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
          margin: auto;
          padding: 24px;
        }

        .container {
          position: fixed;
          top: 64px;
          right: 0;
          height: calc(100% - 64px);
          width: 275px;
          border-left: 1px solid ${palette.accents_2};
          transition: transform 0.3s ease-out;
        }
        .collapsed-container {
          transform: translateX(275px);
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
