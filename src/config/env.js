require('dotenv').config({
  override: true
});

module.exports = {
  baseUrl: process.env.BASE_URL,
  username: process.env.ORANGEHRM_USERNAME,
  password: process.env.ORANGEHRM_PASSWORD
};