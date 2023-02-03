import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { CssBaseline } from '@bolio-ui/core'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = CssBaseline.flush()

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
        </>
      )
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(){
                if (!window.localStorage) return;
                if (window.localStorage.getItem('theme') === 'light') {
                  document.documentElement.style.background = '#fff';
                  document.body.style.background = '#fff';
                } else {
                  document.documentElement.style.background = '#0f0d23';
                  document.body.style.background = '#0f0d23';
                }
              })()`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
