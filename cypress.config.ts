import { defineConfig } from 'cypress';
const fs = require('fs');
const { CustomizedLogin } = require('cypress-social-logins').plugins;
import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';
require('dotenv').config({ path: '.secrets/login-essentials.env' });

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
     configureAllureAdapterPlugins(on, config);
     config.env = process.env; // make environment variables from login-essentials.env available to Cypress
      on('task', {
        checkFileExists(fileName: string) {
          return fs.promises
            .access(fileName, fs.constants.F_OK)
            .then(() => true)
            .catch(() => false);
        },
      });
      on('task', {
        log(message: string) {
          console.log(message); // Log the message to the console/terminal
          return null; // Return null or undefined to resolve the task
        },
      });
  
      // Ignore GPU blacklisting (required for WebGL to work in CI)
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium') {
          const disableGpuIndex = launchOptions.args.indexOf('--disable-gpu');
          if (disableGpuIndex !== -1) {
            launchOptions.args.splice(disableGpuIndex, 1);
          }
          launchOptions.args.push('--ignore-gpu-blacklist');
        }
        return launchOptions;
      });
      return config;
    },
    experimentalSourceRewriting: true,
    modifyObstructiveCode: false,
    fileServerFolder: '.',
    fixturesFolder: './cypress/fixtures',
    supportFile: './cypress/support/e2e.ts',
    specPattern: './cypress/e2e/**/*.{js,jsx,ts,tsx}',
    screenshotOnRunFailure: true,
    videosFolder: 'dist/cypress/videos',
    screenshotsFolder: 'dist/cypress/reports/mochareports/assets',
    chromeWebSecurity: false,
    execTimeout: 50000,
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 50000,
    requestTimeout: 15000,
    watchForFileChanges: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    experimentalStudio: true,
    reporter: 'cypress-mochawesome-reporter',
    retries: 0,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    video: true,
    reporterOptions: {
      reportDir: './dist/cypress/reports/mocha',
      quiet: true,
      charts: true,
      code: false,
      overwrite: false,
      embeddedScreenshots: true,
      inlineAssets: true,
      autoOpen: false,
      saveJson: true,
      showSkipped: true,
      reportFilename: '[status]-[name]-[datetime]-report',
    },
     env: {
      allure: 'true',
      allureCleanResults: 'false',
      allureCompactAttachments: 'true',
      trashAssetsBeforeRuns: true,
      videoCompression:true,
      videoUploadOnPasses: false,
      },
  },
});

require('@applitools/eyes-cypress')(module);
