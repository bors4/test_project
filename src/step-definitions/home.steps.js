const { Given, When, Then } = require('@wdio/cucumber-framework');
const BasePage = require('../pageobjects/base.page');
const HomePage = require('../pageobjects/home.page');
const URLs = require('../config/constants');

const basePage = new BasePage();
const homePage = new HomePage();

Given(/ссылка на сайт/, async () => {
    homePage.getURL()
});

When(/я перехожу по ссылке/, async () => {
    console.log('URL type:', typeof URLs.HOME); // Должно быть "string"
    await basePage.open(URLs.HOME)
});

When(/я нажимаю на ссылку "Каталог" в заголовке/, async () => {
    await $(homePage.locators.href_catalog).click()
})

Then(/я вижу лого сайта/, async () => {
    const logo = browser.$(homePage.locators.main_logo)
    expect(logo).toExist()
});