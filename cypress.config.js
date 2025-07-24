const { defineConfig } = require("cypress");
const cucumber = require('@badeball/cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
    e2e: {
        specPattern: "**/*.feature",
        baseUrl: "https://www.automationexercise.com",
        async setupNodeEvents(on, config) {
            await cucumber(on, config);
            return config;
        },
        defaultCommandTimeout: 15000,
        chromeWebSecurity: false
    }
});