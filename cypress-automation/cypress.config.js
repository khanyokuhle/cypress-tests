const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Self Development Project',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: "https://react-redux.realworld.io",
    viewportHeight: 700,
    viewportWidth: 900,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
