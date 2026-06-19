const createDriver = require('../../src/utils/driverFactory');
const LoginPage = require('../../src/pages/LoginPage');
const env = require('../../src/config/env');
const takeScreenshot = require('../../src/utils/screenshot');

describe('OrangeHRM Login Tests', () => {
  let driver;
  let loginPage;

  beforeEach(async () => {
    driver = await createDriver();
    loginPage = new LoginPage(driver);
  }, 30000);

  afterEach(async () => {
    try {
      if (driver) {
        await driver.quit();
      }
    } catch (error) {
      console.error('Error closing browser:', error);
    }
  }, 60000);

  test(
    'User should login successfully with valid credentials',
    async () => {
      try {
        await loginPage.open(env.baseUrl);

        await loginPage.login(
          env.username,
          env.password
        );

        const loggedIn = await loginPage.isLoggedIn();

        expect(loggedIn).toBe(true);
      } catch (error) {
        await takeScreenshot(
          driver,
          'valid_login_failure'
        );

        throw error;
      }
    },
    60000
  );

  test(
    'User should see an error message for invalid credentials',
    async () => {
      try {
        await loginPage.open(env.baseUrl);

        await loginPage.login(
          'User',
          'InvalidPassword'
        );

        const errorMessage =
          await loginPage.getErrorMessage();

        // expect(errorMessage).toContain(
        //   'Wrong message'
        // );
        expect(errorMessage).toContain(
  'Invalid credentials'
);
      } catch (error) {
        await takeScreenshot(
          driver,
          'invalid_login_failure'
        );

        throw error;
      }
    },
    60000
  );
});