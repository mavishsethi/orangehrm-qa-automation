module.exports = {
  testMatch: ['**/tests/**/*.spec.js'],
  testTimeout: 120000,
  verbose: true,
  reporters: [
    'default',
    [
      'jest-allure2-reporter',
      {
        resultsDir: 'allure-results'
      }
    ]
  ]
};