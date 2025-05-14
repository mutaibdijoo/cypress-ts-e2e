import { FeatAlphaUtils } from 'cypress/libs/featAlpha/feat_alpha.lib';

const featAlphaUtils = new FeatAlphaUtils();
const featAlphaPage = featAlphaUtils.featAlphaPage;

describe('FeatAlpha - feature overview (smoke)', { tags: ['@smoke', '@featA'] }, () => {
  it('validates featAlpha tab vitals and navigation', () => {
    cy.log('Validate: alpha tab vitals');
    featAlphaUtils.openFeatAlphaTab();
    featAlphaUtils.repetitiveAssertionAlpha();

    cy.log('Validate: alpha tab navigation');
    featAlphaUtils.openFeatBravoTab(); // to bravo and back
    featAlphaPage.getpageHeading().should('not.exist');
    cy.go('back');
    featAlphaUtils.repetitiveAssertionAlpha();

    featAlphaUtils.openFeatCharlieTab(); // to charlie and back
    featAlphaPage.getpageHeading().should('not.exist');
    cy.go('back');
    featAlphaUtils.repetitiveAssertionAlpha();
  });
});
