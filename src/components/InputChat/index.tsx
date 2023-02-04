import React from 'react'
import { Spacer, Input, Button, Tooltip } from '@bolio-ui/core'
import { Send as SendIcon } from '@bolio-ui/icons'
import Footer from 'src/components/Footer'

function InputChat() {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className="input-wrapper">
            <Input width="100%" placeholder="" />
            <Spacer w={0.5} />
            <Tooltip text={'Enviar'}>
              <Button iconRight={<SendIcon />} auto scale={2 / 3} px={0.6} />
            </Tooltip>
          </div>
          <Footer />
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .content {
          flex: 1;
          max-width: 900px;
        }
        .input-wrapper {
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  )
}
export default InputChat
