/* eslint-disable no-console */
/* eslint-disable object-shorthand */
import {exec} from 'node:child_process';
import {promisify} from 'node:util';

const execPromise = promisify(exec);

const chromeArgs = [
  //'--disable-gpu',
  '--disable-blink-features=AutomationControlled',
  '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  '--blink-settings=imagesEnabled=false,fontsEnabled=false',
  '--mute-audio',
  '--disable-sync',
  '--disable-default-apps',
  '--disable-extensions',
  '--disable-background-mode',
  '--disable-features=AutofillServerCommunication,BackgroundFetchAPI,NotificationPermissions,ChromeWhatsNewUI,GooglePortals,InterestFeedContentSuggestions,Translate,TranslateUI,WebRTC',
  '--disable-background-sync',
  '--disable-background-networking',
  '--disable-backgrounding-occluded-windows',
  '--disable-renderer-backgrounding',
  '--no-sandbox',
  '--disable-dev-shm-usage',
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-translate',
  '--disable-web-security',
  '--disable-crash-reporter',
  '--log-level=3',
  '--disable-ipc-flooding-protection',
  '--disable-background-timer-throttling',
  '--enable-aggressive-domstorage-flushing',
];

const HEADLESS = process.env.HEADLESS !== 'false';
const RECORD_VIDEO = process.env.RECORD_VIDEO === 'true';
const DEBUG_MODE = process.env.DEBUG_MODE === 'true';

if (HEADLESS) {
  chromeArgs.push('--headless=new');
}

const services = [];

if (RECORD_VIDEO) {
  services.push(['devtools']);
}

const reporters = ['spec'];

if (RECORD_VIDEO) {
  reporters.push([
    '@wdio/video-reporter',
    {
      saveAllVideos: DEBUG_MODE,
      outputDir: './videos',
      videoSlowdownMultiplier: 1,
    },
  ]);
}

export const config = {
  runner: 'local',
  specs: ['./features/**/*.feature'],
  exclude: [],
  maxInstances: 1,

  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        prefs: {
          'profile.managed_default_content_settings.images': 2,
          'profile.managed_default_content_settings.fonts': 2,
          'profile.default_content_setting_values.fonts': 2,
        },
        args: chromeArgs,
      },
      'goog:loggingPrefs': {
        browser: 'OFF',
        driver: 'OFF',
      },
    },
  ],

  restartBrowserForEachTest: false,

  logLevel: 'error',
  bail: 0,
  waitforTimeout: 30000,
  connectionRetryTimeout: 180000,
  connectionRetryCount: 3,
  specFileRetries: 1,
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
    require: ['./src/step-definitions/**/*.js', './src/step-definitions/hooks.js'],
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
    timeout: 90000,
    ignoreUndefinedDefinitions: false,
  },

  before: async function () {
    const dotenvx = await import('@dotenvx/dotenvx');
    dotenvx.config();
    await browser.setWindowSize(1920, 1080);
    await browser.execute(() => {
      Object.defineProperty(navigator, 'webdriver', {get: () => undefined});
    });
  },

  onComplete: async function () {
    console.log('Generating Allure report...');

    try {
      await execPromise('npx allure generate allure-results -o allure-report');
      console.log('Allure report successfully generated in allure-report directory');
    } catch (error) {
      console.error('Allure report generation failed:', error);

      try {
        const allure = (await import('allure-commandline')).default;
        const reportGenerator = allure(['generate', 'allure-results', '--clean', '-o', 'allure-report']);

        return new Promise((resolve, reject) => {
          const generationTimeout = setTimeout(() => reject(new Error('Could not generate Allure report')), 30000);

          reportGenerator.on('exit', (exitCode) => {
            clearTimeout(generationTimeout);

            if (exitCode !== 0) {
              return reject(new Error('Allure report generation failed'));
            }

            console.log('Allure report successfully generated');
            resolve();
          });
        });
      } catch (fallbackError) {
        console.error('Allure fallback also failed:', fallbackError);
      }
    }
  },
};
