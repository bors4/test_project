import allure from 'allure-commandline';

export const config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    exclude: [],
    maxInstances: 1,

    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            prefs: {
                'profile.managed_default_content_settings.images': 2,
                'profile.managed_default_content_settings.fonts': 2,
                'profile.default_content_setting_values.fonts': 2
            },
            args: [
                '--blink-settings=imagesEnabled=false',
                '--disable-fonts',
                '--blink-settings=fontsEnabled=false'
            ]
        }
    }],

    logLevel: 'warn',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['visual'],
    framework: 'cucumber',

    reporters: [
        ['spec',
            {
                addConsoleLogs: true,
                showPreface: false,
                color: true,
            }],
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            useCucumberStepReporter: true
        }]
    ],

    cucumberOpts: {
        require: ['./src/step-definitions/*.js'],
        format: [],
        formatOptions: {
            console: {
                showLogs: true,
                showProgress: true,
                theme: 'dark',
                printAttachments: true
            }
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
        ignoreUndefinedDefinitions: false
    },

    before: function (capabilities, specs) {
        console.log('Cucumber formatters initialized:', this.cucumberOpts.format);
        browser.setWindowSize(1920, 1080);
    },

    onComplete: function () {
        const generation = allure(['generate', 'allure-results', '--clean']);
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(new Error('Could not generate Allure report')),
                10000
            );

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout);
                if (exitCode !== 0) {
                    return reject(new Error('Allure report generation failed'));
                }
                console.log('Allure report successfully generated');
                resolve();
            });
        });
    }
};