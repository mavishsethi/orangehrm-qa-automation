# OrangeHRM QA Automation Framework

Selenium-based UI automation framework for the OrangeHRM demo application built using JavaScript, Jest, and the Page Object Model (POM).

## Tech Stack

* Selenium WebDriver
* JavaScript (Node.js)
* Jest
* Allure Reports
* Postman & Newman
* Dotenv

## Features

* Page Object Model (POM)
* Environment-based configuration
* Positive and negative login scenarios
* Screenshot capture on test failure
* Allure reporting integration

## Project Structure

```text
src/
├── config/
├── pages/
└── utils/

tests/
└── ui/
```

## Setup

```bash
git clone https://github.com/YOUR_USERNAME/orangehrm-qa-automation.git

cd orangehrm-qa-automation

npm install
```

Create a `.env` file:

```env
BASE_URL=https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

ORANGEHRM_USERNAME=Admin
ORANGEHRM_PASSWORD=admin123
```

## Run Tests

```bash
npm test
```

## Generate Allure Report

```bash
npm run allure:generate

npm run allure:open
```

## Test Coverage

* ✅ Valid Login
* ✅ Invalid Login

