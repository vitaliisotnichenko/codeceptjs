exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  timeout: 10000,
  helpers: {
    Puppeteer: {
      url: 'https://jira.hillel.it',
      show: true,
      windowSize: '1200x900',
      waitForNavigation: 'networkidle0',
      waitForAction: 500
    },

    FillFieldWithTimeout: {
      require: "./helpers/fillFieldWithDelay.js"
    },
  },
  include: {
    I: './steps/steps_file.js',
    mainPage: './pages/main.js',
    createIssuePage: './pages/createIssue.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Test_project',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      "enabled": true
    }
  }
};