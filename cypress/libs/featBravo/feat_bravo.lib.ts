import { FeatBravoPage } from 'cypress/pageObjects/featBravo/feat_bravo.page';
import { Navigation } from '../navigation/navigation.lib';

export class FeatBravoUtils extends Navigation {
  public featBravoPage: FeatBravoPage;

  constructor() {
    super();
    this.featBravoPage = new FeatBravoPage();
  }

  /**
   * Asserts bravo tab features
   */
  public repetitiveAssertionBravo() {
    cy.log('Method: bravo assertions');
    this.featBravoPage.getpageSubHeading().should('be.visible').and('have.text', 'Bravo sub-heading');
    this.featBravoPage.getpageDescription().should('be.visible').and('have.text', 'Bravo description');
  }
}
