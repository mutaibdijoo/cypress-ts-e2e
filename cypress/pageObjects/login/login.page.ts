export class LoginPage {
  // get the 'header' element of login page
  getLoginPageHeader() {
    return cy.get('[data-cy="login-header-selector"]');
  }

  // get the 'email' input box element
  getEmailInputBox() {
    return cy.get('[data-cy="email-input-box-selector"]');
  }

  // get the 'password' input box element
  getPasswordInputBox() {
    return cy.get('[data-cy="password-input-box-selector"]');
  }

  // get the 'submit' button element
  getSubmitButton() {
    return cy.get('[data-cy="submit-button-selector"]');
  }

  // get the 'signup' button element
  getSignupButton() {
    return cy.get('[data-cy="signup-button-selector"]');
  }

  // get the 'forgot password' button element
  getForgotPasswordButton() {
    return cy.get('[data-cy="forgot-password-button-selector"]');
  }
}
