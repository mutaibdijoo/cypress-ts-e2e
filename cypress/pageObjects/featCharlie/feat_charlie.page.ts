export class FeatCharliePage {
  // get the 'page heading' element
  getpageHeading() {
    return cy.get('[data-cy="charlie-heading-selector"]');
  }

  // get the 'page sub-heading' element
  getpageSubHeading() {
    return cy.get('[data-cy="charlie-sub-heading-selector"]');
  }

  // get the 'page description' element
  getpageDescription() {
    return cy.get('[data-cy="charlie-description-selector"]');
  }
}
