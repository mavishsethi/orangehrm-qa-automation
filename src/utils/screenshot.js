const fs = require('fs');
const path = require('path');

async function takeScreenshot(driver, testName) {
  const image = await driver.takeScreenshot();

  const dir = path.join(process.cwd(), 'reports', 'screenshots');

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(dir, `${testName}.png`),
    image,
    'base64'
  );
}

module.exports = takeScreenshot;