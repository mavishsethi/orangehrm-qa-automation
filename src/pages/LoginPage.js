const { By, until } = require('selenium-webdriver');

class LoginPage {
  constructor(driver) {
    this.driver = driver;

    this.usernameInput = By.name('username');
    this.passwordInput = By.name('password');
    this.loginButton = By.css('button[type="submit"]');

    this.errorMessage = By.css('.oxd-alert-content-text');
  }

  async open(url) {
    await this.driver.get(url);

    await this.driver.wait(
      until.elementLocated(this.usernameInput),
      20000
    );
  }

  async login(username, password) {
    const usernameField = await this.driver.findElement(
      this.usernameInput
    );

    const passwordField = await this.driver.findElement(
      this.passwordInput
    );

    await usernameField.clear();
    await usernameField.sendKeys(username);

    await passwordField.clear();
    await passwordField.sendKeys(password);

    await this.driver.findElement(this.loginButton).click();
  }

  async isLoggedIn() {
    await this.driver.wait(async () => {
      const currentUrl = await this.driver.getCurrentUrl();

      return currentUrl.includes('/dashboard');
    }, 20000);

    return true;
  }

  async getErrorMessage() {
    await this.driver.wait(
      until.elementLocated(this.errorMessage),
      20000
    );

    const errorElement = await this.driver.findElement(
      this.errorMessage
    );

    await this.driver.wait(
      until.elementIsVisible(errorElement),
      10000
    );

    return await errorElement.getText();
  }
}

module.exports = LoginPage;