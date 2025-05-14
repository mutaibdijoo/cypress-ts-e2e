import { FeatAlphaPage } from 'cypress/pageObjects/featAlpha/feat_alpha.page';
import { FeatBravoPage } from 'cypress/pageObjects/featBravo/feat_bravo.page';
import { FeatCharliePage } from 'cypress/pageObjects/featCharlie/feat_charlie.page';
import { LeftPanelPage } from 'cypress/pageObjects/leftPanel/left_panel.page';

export class Navigation {
  private readonly _featAlphaPage: FeatAlphaPage;
  private readonly _featBravoPage: FeatBravoPage;
  private readonly _featCharliePage: FeatCharliePage;
  private readonly _leftPanelPage: LeftPanelPage;

  constructor() {
    this._leftPanelPage = new LeftPanelPage();
    this._featAlphaPage = new FeatAlphaPage();
    this._featBravoPage = new FeatBravoPage();
    this._featCharliePage = new FeatCharliePage();
  }

  /**
   * Opens the feat alpha tab from left panel.
   */
  public openFeatAlphaTab() {
    cy.log('Method: open feat alpha tab');
    this._leftPanelPage.getMenuButton().should('be.visible').click();
    this._leftPanelPage.getFeatAlphaButton().should('be.visible').and('have.text', 'Alpha').click();
    this._featAlphaPage.getpageHeading().should('be.visible'); // validate navigation
    this._leftPanelPage.getFeatAlphaButton().should('not.exist'); // validate left panel closure
    cy.url().should('include', '/alpha'); // validate url
  }

  /**
   * Opens the feat bravo tab from left panel.
   */
  public openFeatBravoTab() {
    cy.log('Method: open feat bravo tab');
    this._leftPanelPage.getMenuButton().should('be.visible').click();
    this._leftPanelPage.getFeatBravoButton().should('be.visible').and('have.text', 'Bravo').click();
    this._featBravoPage.getpageHeading().should('be.visible'); // validate navigation
    this._leftPanelPage.getFeatAlphaButton().should('not.exist'); // validate left panel closure
    cy.url().should('include', '/bravo'); // validate url
  }

  /**
   * Opens the feat charlie tab from left panel.
   */
  public openFeatCharlieTab() {
    cy.log('Method: open feat charlie tab');
    this._leftPanelPage.getMenuButton().should('be.visible').click();
    this._leftPanelPage.getFeatCharlieButton().should('be.visible').and('have.text', 'Charlie').click();
    this._featCharliePage.getpageHeading().should('be.visible'); // validate navigation
    this._leftPanelPage.getFeatAlphaButton().should('not.exist'); // validate left panel closure
    cy.url().should('include', '/charlie'); // validate url
  }
}
