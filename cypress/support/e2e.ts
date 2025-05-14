// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import '@applitools/eyes-cypress/commands';
import 'cypress-real-events';
import 'cypress-wait-until';
import 'cypress-mochawesome-reporter/register';
import '@mmisty/cypress-allure-adapter/support';
import { LoginUtils } from 'cypress/libs/login/login.lib';
import { type LoginCreds } from 'cypress/fixtures/login/login_data.interface';

const registerCypressGrep = require('@cypress/grep');
const loginUtils = new LoginUtils();
registerCypressGrep();

require('cypress-xpath');

Cypress.on('uncaught:exception', (_err, runnable) => {
  return false; // prevents Cypress from failing the test
});

// login hook with RBAC and skip feature
beforeEach(() => {
  cy.fixture<LoginCreds>('login/login_data').then((data) => {
    const skipLoginForSpecFiles = data.skipSpecFiles;
    const adminSpecFile = data.adminSpecFiles;

    if (!skipLoginForSpecFiles.includes(Cypress.spec.name)) {
      if (adminSpecFile.includes(Cypress.spec.name)) {
        cy.log('Logging in as Admin');
        loginUtils.login(data.adminCreds);
      } else {
        loginUtils.login();
      }
    }
  });
});
