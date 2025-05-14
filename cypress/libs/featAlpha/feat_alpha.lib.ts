import { FeatAlphaPage } from 'cypress/pageObjects/featAlpha/feat_alpha.page';
import { Navigation } from '../navigation/navigation.lib';

export class FeatAlphaUtils extends Navigation {
  public featAlphaPage: FeatAlphaPage;

  constructor() {
    super();
    this.featAlphaPage = new FeatAlphaPage();
  }

  /**
   * Asserts alpha tab features
   */
  public repetitiveAssertionAlpha() {
    cy.log('Method: alpha assertions');
    this.featAlphaPage.getpageSubHeading().should('be.visible').and('have.text', 'Alpha sub-heading');
    this.featAlphaPage.getpageDescription().should('be.visible').and('have.text', 'Alpha description');
  }
}
