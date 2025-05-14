import { type User, type LoginCreds } from 'cypress/fixtures/login/login_data.interface';
import { LoginApiEndpoints } from 'cypress/fixtures/shared/apiEndpoints/api_endpoints.enum';
import { HttpStatus } from 'cypress/fixtures/shared/apiStatusCodes/api_status_codes.enum';
import { LoginPage } from 'cypress/pageObjects/login/login.page';
import { Utility } from 'cypress/support/utility';

export class LoginUtils {
  private readonly loginPage: LoginPage;
  private readonly utility: Utility;
  private readonly loginUrl: string;
  private readonly homePageUrl: string;

  constructor() {
    this.loginPage = new LoginPage();
    this.utility = new Utility();
    this.loginUrl = this.utility.getLoginUrl();
    this.homePageUrl = this.utility.getHomePageUrl();
  }

  /**
   * Performs login on staging and production environments.
   * By default it will login with the Valid User credentials.
   * @param customCreds - Provide custom credentials if you want to login into any other account. (optional)
   */
  public login(customCreds?: User) {
    cy.fixture<LoginCreds>('login/login_data').then((loginData) => {
      const loginCreds: User = customCreds ?? loginData.validUser;

      // login
      cy.visit(this.loginUrl);
      this.loginPage.getLoginPageHeader().should('be.visible');
      this.loginPage.getEmailInputBox().type(loginCreds.email).should('have.value', loginCreds.email);
      this.loginPage.getPasswordInputBox().type(loginCreds.password).should('have.value', loginCreds.password);
      cy.intercept('GET', LoginApiEndpoints.GET_HOME_PAGE).as('homePage'); // intercept API
      this.loginPage.getSubmitButton().should('be.visible').and('not.be.disabled').click();

      // validate
      cy.url().should('include', this.homePageUrl);
      cy.wait('@homePage').its('response.statusCode').should('eq', HttpStatus.OK); // validate API
    });
  }
}
