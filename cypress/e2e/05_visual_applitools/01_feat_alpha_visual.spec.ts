import { FeatAlphaUtils } from 'cypress/libs/featAlpha/feat_alpha.lib';

const featAlphaUtils = new FeatAlphaUtils();

beforeEach(() => {
  cy.eyesOpen({
    appName: 'Cypress TS App',
    testName: Cypress.currentTest.title,
  });
});

afterEach(() => {
  cy.eyesClose();
});

describe('FeatAlpha - feature overview (visual)', { tags: ['@visualTest', '@featA'] }, () => {
  it('validates featAlpha tab visually via applitools', () => {
    cy.log('Validate: featAlpha tab UI visually.');
    featAlphaUtils.openFeatAlphaTab();
    cy.eyesCheckWindow({
      tag: 'FeatAlpha',
      target: 'window',
      fully: true,
      matchLevel: 'Strict',
    });
  });
});
