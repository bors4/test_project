const { Given, When, Then } = require('@wdio/cucumber-framework');
const BasePage = require('../pageobjects/base.page');
const HomePage = require('../pageobjects/home.page');
const URLs = require('../config/constants');

const basePage = new BasePage();
const homePage = new HomePage();

/*
Given
-----------------------------------------------------------------------------------------
*/

Given(/^ссылка на сайт/, async () => {
    await homePage.getURL();
});

/*
When
-----------------------------------------------------------------------------------------
*/

When(/я перехожу по ссылке/, async () => {
    await basePage.open(URLs.HOME)
});

When(/я нажимаю на ссылку "Каталог" в заголовке/, async () => {
    const selector = String(homePage.hrefCatalog);
    await $(selector).click();
})

When(/я нажимаю на поле ввода для поиска товара/, async () => {
    const searchInput = browser.$(homePage.searchInput)
    await searchInput.click();
})

When(/я ввожу название товара/, async () => {
    const searchInput = browser.$(homePage.searchInput)
    const textToSearch = homePage.getTextFromSearchInput()
    await searchInput.setValue(textToSearch)
})

/*
Then
-----------------------------------------------------------------------------------------
*/

Then(/я вижу лого сайта/, async () => {
    const logo = browser.$(homePage.main_logo)
    expect(logo).toExist()
});

Then(/я вижу поле ввода для поиска товара/, async () => {
    const searchInput = browser.$(homePage.searchInput)
    expect(searchInput).toExist()
})

Then(/я вижу текст примера товара для поиска/, async () => {
    const searchInput = browser.$(homePage.searchInput)
    await expect(searchInput.toHaveAttr('placeholder', expect.stringContaining('Например')))
})

Then(/я вижу окно результатов поиска/, async () => {
    $(homePage.modalSearch).isEnabled()
})

