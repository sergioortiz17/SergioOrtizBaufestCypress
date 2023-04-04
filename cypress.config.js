const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
        //'baseUrl': 'https://www.demoblaze.com/index.html',
        defaultCommandTimeout: 10000, //10seg
        watchForFileChanges: false,//no update por cada cambio
        //debuguear errores
        "video": true,
        "videosFolder": "cypress/videos",
        "screenshotOnRunFailure": true,
        "screenshotsFolder": "cypress/screenshots",
        failOnStatusCode: false
  },
});
