exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://jira.hillel.it',
      show: true,
      windowSize: '1200x900',
      waitForNavigation: 'networkidle0',
      waitForAction: 500
    }
  },
  include: {
    I: './steps/steps_file.js'
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
    }
  }
};