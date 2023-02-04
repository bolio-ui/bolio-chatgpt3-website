import React from 'react'
import { Spacer, Checkbox, Code, Input } from '@bolio-ui/core'
// import { useTranslation } from 'react-i18next'

const RegexInput: React.FC<unknown> = () => {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className="input-wrapper">
            <Input
              data-testid="regex-input"
              width="100%"
              //   placeholder={t('Input a regular expression')}
            />
            <Spacer w={0.5} />
            {/* <Tooltip text={t('Copy permalink')}>
              <Button
                iconRight={<Link />}
                auto
                scale={2 / 3}
                px={0.6}
                onClick={onCopy}
              />
            </Tooltip> */}
          </div>

          <>
            <Spacer h={1} />
            <div className="flags-settings">
              {/* <label>{t('Flags: ')}</label> */}
              <Spacer w={0.5} />
              <Checkbox.Group scale={0.75}>
                {/* <Checkbox value="g">{t('Global search')}</Checkbox>
                  <Checkbox value="i">{t('Case-insensitive')}</Checkbox>
                  <Checkbox value="m">{t('Multi-line')}</Checkbox>
                  <Checkbox value="s">
                    {t('Allows . to match newline')}
                  </Checkbox> */}
              </Checkbox.Group>

              <>
                <Spacer w={1} />
                {/* <label>{t('Settings: ')}</label> */}
                <Spacer w={0.5} />
                <div>
                  <Checkbox>
                    {/* {t('include escape ')} */}
                    <Code>\</Code>
                  </Checkbox>
                </div>
              </>
            </div>
          </>
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
        .flags-settings {
          display: flex;
        }
        .flags-settings > :global(.group > .checkbox) {
          margin-right: calc(calc(0.875 * 8px) * 2);
        }
      `}</style>
    </>
  )
}
export default RegexInput
