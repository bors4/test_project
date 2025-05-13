import allure from 'allure-commandline';

export const config = {

    runner: 'local',

    specs: [
        './features/**/*.feature'
    ],

    exclude: [
    ],

    maxInstances: 2,

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


    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['visual'],

    framework: 'cucumber',

    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        useCucumberStepReporter: true
    }],
],

    cucumberOpts: {
        require: ['./src/step-definitions/*.js'],
        format: ['@qavajs/format'],
        tagExpression: '',
        timeout: 60000,
        strict: true,
        formatOptions: {
            stepDefinitions: true
        },

        backtrace: false,

        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },

    onPrepare: function (config, capabilities) {
        allure(['generate', 'allure-results', '--clean']);
    },

    before: function (capabilities, specs) {
        browser.setWindowSize(1920, 1080);
    },

    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                10000)
            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)
                if (exitCode !== 0) {
                    return reject(reportError)
                }
                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
};