import { FeatCharliePage } from 'cypress/pageObjects/featCharlie/feat_charlie.page';
import { Navigation } from '../navigation/navigation.lib';

export class FeatCharlietils extends Navigation {
  public featCharliePage: FeatCharliePage;

  constructor() {
    super();
    this.featCharliePage = new FeatCharliePage();
  }

  /**
   * Asserts charlie tab features
   */
  public repetitiveAssertionCharlie() {
    cy.log('Method: charlie assertions');
    this.featCharliePage.getpageSubHeading().should('be.visible').and('have.text', 'Charlie sub-heading');
    this.featCharliePage.getpageDescription().should('be.visible').and('have.text', 'Charlie description');
  }
}
