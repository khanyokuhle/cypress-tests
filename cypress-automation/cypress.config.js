const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportPageTitle: 'Cypress Automation',
    inlineAssets: true,
    overwrite: true,
    saveHtml: true,
    saveJson: false,
    reportFilename: 'report.html'
  },
  e2e: {
    baseUrl: "https://react-redux.realworld.io",
    viewportHeight: 700,
    viewportWidth: 900,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
