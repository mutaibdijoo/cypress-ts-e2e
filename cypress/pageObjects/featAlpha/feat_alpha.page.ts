export class FeatAlphaPage {
  // get the 'page heading' element
  getpageHeading() {
    return cy.get('[data-cy="alpha-heading-selector"]');
  }

  // get the 'page sub-heading' element
  getpageSubHeading() {
    return cy.get('[data-cy="alpha-sub-heading-selector"]');
  }

  // get the 'page description' element
  getpageDescription() {
    return cy.get('[data-cy="alpha-description-selector"]');
  }
}
