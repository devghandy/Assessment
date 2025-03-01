
const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.saucedemo.com/',
        viewportHeight: 900,
        viewportWidth: 1400,
        failOnStatusCode: false,
        watchForFileChanges: false,
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
    },
});
    