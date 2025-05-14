export class FeatBravoPage {
  // get the 'page heading' element
  getpageHeading() {
    return cy.get('[data-cy="bravo-heading-selector"]');
  }

  // get the 'page sub-heading' element
  getpageSubHeading() {
    return cy.get('[data-cy="bravo-sub-heading-selector"]');
  }

  // get the 'page description' element
  getpageDescription() {
    return cy.get('[data-cy="bravo-description-selector"]');
  }
}
