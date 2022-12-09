const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  chromeWebSecurity: false,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    
  },
  env: {
    DEV_AUTH_URL: "https://auth.dev.edge.revix.com/authentication",
    QA_AUTH_URL: "https://auth.qa.edge.revix.com/authentication",
    DEV_BASE_URL: "https://app-api.dev.edge.revix.com",
    QA_BASE_URL: "https://app-api.qa.edge.revix.com",
    USERNAME: "Martin.M@revix.com",
    PASSWORD: "Thisisatest1",
    QA_MARKETING_SITE_URL: "https://revix-qa-site-marketing.azurewebsites.net/",
    STAGING_MARKETING_SITE_URL:
      "https://revix-staging-site-marketing.azurewebsites.net/",
  },
  watchForFileChanges: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  waitForAnimations: true,
  animationDistanceThreshold: 20,
  defaultCommandTimeout: 10000,
  execTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  failOnStatusCode: false,
});
