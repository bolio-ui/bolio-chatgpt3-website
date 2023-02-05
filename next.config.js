const withTM = require('next-transpile-modules')([])

module.exports = withTM({
  swcMinify: false,
  trailingSlash: true,
  env: {
    NEXT_OPEN_AI_KEY: process.env.NEXT_OPEN_AI_KEY
  }
})
