import LoginPage from "./loginPage";

describe('Login', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login with correct email and password', () => {
    loginPage.fillEmail('qgr37990@zbock.com');
    loginPage.fillPassword('qgr37990@zbock.com');
    loginPage.submit();
    cy.url().should('eq', 'https://alpha.k8s-dev.carrotquest.io/panel/4895/dashboard');
  });

  it('should show error with incorrect email and correct password', () => {
    loginPage.fillEmail('afsefwd');
    loginPage.fillPassword('qgr37990@zbock.com');
    loginPage.submit();
    loginPage.getErrorMessageIncorrectEmail().should('have.text', 'Введите корректный email');
  });

  it('should show error with correct email and incorrect password', () => {
    loginPage.fillEmail('qgr37990@zbock.com');
    loginPage.fillPassword('test_success123');
    loginPage.submit();
    loginPage.getErrorMessageIncorrectData().should('have.text', 'Неверные email или пароль');
  });

  it('should show errors with empty email and correct password', () => {
  loginPage.fillPassword('qgr37990@zbock.com');
  loginPage.submit();
  loginPage.getErrorMessageEmptyEmail().should('have.text', 'Введите email');
  });

  it('should show errors with correct email and empty password', () => {
  loginPage.fillEmail('qgr37990@zbock.com');
  loginPage.submit();
  loginPage.getErrorMessageEmptyPassword().should('have.text', 'Введите пароль');
  });

  it('reset password with correct email', () => {
  loginPage.forgotButton();
  loginPage.fillEmail('qgr37990@zbock.com');
  loginPage.submit();
  loginPage.getSuccessResetPasswordMessage();
  });

  it('reset password with incorrect email', () => {
  loginPage.forgotButton();
  loginPage.fillEmail('qweqdfef');
  loginPage.submit();
  cy.get('.ng-scope[when="email"][translate="passwordReset.passwordResetForm.emailInput.errors.email"]')
    .should('have.text', 'Введите корректный email');
  });

  it('reset password with non-existen email', () => {
  loginPage.forgotButton();
  loginPage.fillEmail('sdfsd@ddf.re');
  loginPage.submit();
  loginPage.getErrorMessageNoSuchUser();
  });

  it('reset password and remember password click', () => {
  loginPage.forgotButton();
  loginPage.rememberButton();
  loginPage.getTitlePage().should('have.text', 'Вход');
  });
});