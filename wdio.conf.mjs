import allure from 'allure-commandline';

export const config = {
  runner: 'local',
  specs: ['./features/**/*.feature'],
  exclude: [],
  maxInstances: 3,

  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        prefs: {
          'profile.managed_default_content_settings.images': 2,
          'profile.managed_default_content_settings.fonts': 2,
          'profile.default_content_setting_values.fonts': 2,
        },
        args: ['--blink-settings=imagesEnabled=false', '--disable-fonts', '--blink-settings=fontsEnabled=false'],
      },
    },
  ],

  logLevel: 'error',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['visual'],
  framework: 'cucumber',

  reporters: [
    [
      'spec',
      {
        addConsoleLogs: true,
        showPreface: false,
        color: true,
      },
    ],
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        useCucumberStepReporter: true,
      },
    ],
  ],

  cucumberOpts: {
    require: ['./src/step-definitions/*.js'],
    format: ['json:./reports/cucumber-report.json'],
    formatOptions: {
      console: {
        showLogs: true,
        showProgress: true,
        theme: 'dark',
        printAttachments: true,
      },
    },
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },

  before: function (capabilities, specs) {
    browser.setWindowSize(1920, 1080);
  },

  afterTest: async function (test, context, {error}) {
    if (error) {
      try {
        // Создаем скриншот
        const screenshot = await browser.takeScreenshot();

        // Прикрепляем скриншот к Allure-отчёту
        allure.addAttachment('Screenshot on Failure', Buffer.from(screenshot, 'base64'), 'image/png');

        // Также сохраняем в файл (опционально)
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const testName = test.title.replace(/\s+/g, '_');
        const path = `./screenshots/fail_${testName}_${timestamp}.png`;
        await browser.saveScreenshot(path);
        console.log(`Скриншот сохранён: ${path}`);
      } catch (err) {
        console.error('Не удалось сохранить скриншот:', err);
      }
    }
  },

  onComplete: function () {
    const generation = allure(['generate', 'allure-results', '--clean']);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(new Error('Could not generate Allure report')), 30000);

      generation.on('exit', function (exitCode) {
        clearTimeout(generationTimeout);
        if (exitCode !== 0) {
          return reject(new Error('Allure report generation failed'));
        }
        console.log('Allure report successfully generated');
        resolve();
      });
    });
  },
};
