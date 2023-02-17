const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'adg1a2',
  reporter: 'cypress-mochawesome-reporter',
  "defaultCommandTimeout": 30000,
  "pageLoadTimeout": 900000,
  "requestTimeout": 60000,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
