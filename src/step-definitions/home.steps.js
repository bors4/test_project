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
});

When(/я нажимаю на поле ввода названия товара/, async () => {
    await $('input[name="query"]').click();
  });

When(/я ввожу название товара/, async () => {
    const searchInput = await browser.$(homePage.inputSearch)
    const textToSearch = await homePage.getTextFromSearchInput()
    await searchInput.setValue(textToSearch)
});

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
    await expect(searchInput).toExist()
});

Then(/я вижу текст примера товара для поиска/, async () => {
    const searchInput = await browser.$(homePage.searchInput)
    await expect(searchInput.toHaveAttr('placeholder', expect.stringContaining('Например')))
});

Then(/я вижу окно результатов поиска/, async () => {
    await browser.switchFrame($('iframe'))
    const modalSearch = await browser.$(homePage.modalSearch)
    await modalSearch.waitForDisplayed({ timeout: 3000})
    await expect(modalSearch).toExist()
});

Then(/я вижу чекбокс "К сравнению"/, async () => {
    const checkBoxToEqual = browser.$(homePage.checkBoxToEqual)
    await expect(checkBoxToEqual).toExist()
})