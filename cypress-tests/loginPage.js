class LoginPage {
  visit() {
    cy.visit('https://alpha.k8s-dev.carrotquest.io/panel/unauthorized/login');
  }

  fillEmail(email) {
    cy.get('[name=email]').type(email);
  }

  fillPassword(password) {
    cy.get('[name=password]').type(password);
  }

  submit() {
    cy.get('[type=submit]').click();
  }

  forgotButton() {
    cy.get('[ui-sref=passwordreset]').click();
  }

  rememberButton() {
    cy.get('[ui-sref=login]').click();
  }

  getTitlePage() {
    return cy.get("[translate='login.content.heading']");
  }


  getSuccessResetPasswordMessage() {
    return cy.get('.margin-top-10.ng-scope');
  }

  getErrorMessageNoSuchUser() {
    return cy.get('.ng-scope[when="apiResetPasswordFailed"][translate="passwordReset.passwordResetForm.emailInput.errors.apiResetPasswordFailed"]');
  }

  getErrorMessageIncorrectData() {
     return cy.get('.ng-scope[when="apiLoginFailed"][translate="login.content.passwordInput.errors.apiLoginFailed"]');
  }

  getErrorMessageEmptyEmail() {
    return cy.get('.ng-scope[when="required"][translate="login.content.emailInput.errors.required"]');
  }

  getErrorMessageEmptyPassword() {
    return cy.get('.ng-scope[when="required"][translate="login.content.passwordInput.errors.required"]');
  }

  getErrorMessageIncorrectEmail() {
    return cy.get('.ng-scope[when="email"][translate="login.content.emailInput.errors.email"]');
  }
}

export default LoginPage;
