const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://react-redux.realworld.io",
    viewportHeight: 700,
    viewportWidth: 900,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
