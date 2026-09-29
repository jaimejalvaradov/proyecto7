const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Debe coincidir con la URL donde corre "npm run serve"
    baseUrl: 'http://localhost:8080',
    setupNodeEvents() {}
  }
})
