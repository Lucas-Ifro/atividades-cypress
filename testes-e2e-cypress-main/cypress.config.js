const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa os listeners de eventos Node.js
    },
    baseUrl: 'http://localhost:3000/', // Define a URL base para os testes e2e
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
