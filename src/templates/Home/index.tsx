import React from 'react'
import {
  Section,
  Grid,
  Container,
  Input,
  Text,
  Button
  // useToasts
} from '@bolio-ui/core'
import Base from 'src/templates/Base'
import Hero from 'src/components/Hero'
import { Send } from '@bolio-ui/icons'
import { Formik } from 'formik'
import * as Yup from 'yup'

function Home() {
  // const { setToast } = useToasts()

  const initialValues = {
    text: ''
  }

  const validationSchema = Yup.object().shape({
    text: Yup.string()
      .required('Text is required field')
      .min(3, 'This field must have at least 3 characters')
  })

  const handleSubmit = React.useCallback(() => {}, [])

  return (
    <Base>
      <Hero
        content={{
          title: 'Bolio ChatGPT',
          description:
            'Enter a text, and the model will generate another part, following a similar style and structure. 🪄⚡️'
        }}
      />
      <Section pb={4}>
        <Container>
          <Grid.Container gap={2} justify="center">
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
                  <Grid
                    xs={12}
                    md={4}
                    direction="column"
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                  >
                    <Input
                      name="text"
                      font="16px"
                      height={1.5}
                      width="100%"
                      rounded
                      // disabled={remaining === 0}
                      value={values.text}
                      error={touched.text && errors.text}
                      onChange={handleChange('text')}
                      onBlur={handleBlur('text')}
                    />
                    {touched.text && errors.text && (
                      <Text font="12px" mt={0.5} mb={0} type="error">
                        {errors.text}
                      </Text>
                    )}
                  </Grid>
                  <Grid xs={12} md={2}>
                    <Button
                      iconRight={<Send />}
                      type="secondary-light"
                      width="100%"
                      height={1.3}
                      rounded
                      disabled={!isValid}
                      onClick={handleSubmit}
                    >
                      Go!
                    </Button>
                  </Grid>
                </>
              )}
            </Formik>
          </Grid.Container>
        </Container>
      </Section>
    </Base>
  )
}

export default Home
