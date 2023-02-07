import React from 'react'
import { Spacer, Input, Button, Tooltip, Spinner } from '@bolio-ui/core'
import { Send as SendIcon, Trash as TrashIcon } from '@bolio-ui/icons'
import Footer from 'src/components/Footer'
import { Formik } from 'formik'
import * as Yup from 'yup'

function Prompt({ onSubmit, loading, reset }) {
  const initialValues = {
    question: ''
  }

  const validationSchema = Yup.object().shape({
    question: Yup.string()
      .required('Question is required field')
      .min(3, 'This field must have at least 3 characters')
  })

  const handleSubmit = async (values, { resetForm }) => {
    await onSubmit(values.question)
    resetForm()
  }

  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className="input-wrapper">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize
              validateOnMount
            >
              {({
                values,
                errors,
                touched,
                isValid,
                handleChange,
                handleBlur,
                handleSubmit
              }) => (
                <>
                  <Input
                    name="question"
                    width="100%"
                    disabled={loading}
                    value={values.question}
                    error={touched.question && errors.question}
                    onChange={handleChange('question')}
                    onBlur={handleBlur('question')}
                  />
                  <Spacer w={0.5} />
                  <Tooltip text="Send">
                    <Button
                      iconRight={
                        loading ? <Spinner scale={1 / 2.5} /> : <SendIcon />
                      }
                      auto
                      scale={2 / 3}
                      px={0.6}
                      disabled={!isValid}
                      onClick={handleSubmit}
                    />
                  </Tooltip>
                  <Spacer w={0.5} />
                  <Tooltip text="Clear conversation">
                    <Button
                      icon={<TrashIcon />}
                      type="error"
                      auto
                      scale={2 / 3.3}
                      px={0.6}
                      onClick={reset}
                    />
                  </Tooltip>
                </>
              )}
            </Formik>
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
export default Prompt
