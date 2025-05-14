export class LeftPanelPage {
  // get the 'Menu button' element
  getMenuButton() {
    return cy.get('[data-cy="left-panel-menu-button-selector"]');
  }

  // get the 'FeatAlpha button' element
  getFeatAlphaButton() {
    return cy.get('[data-cy="feat-alpha-button-selector"]');
  }

  // get the 'FeatBravo button' element
  getFeatBravoButton() {
    return cy.get('[data-cy="feat-bravo-button-selector"]');
  }

  // get the 'FeatCharlie button' element
  getFeatCharlieButton() {
    return cy.get('[data-cy="feat-charlie-button-selector"]');
  }
}
