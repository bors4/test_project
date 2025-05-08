const {When} = require('@wdio/cucumber-framework');
const BasePage = require('../pageobjects/base.page');
const HomePage = require('../pageobjects/home.page');
const URLs = require('../config/constants');

const basePage = new BasePage();
const homePage = new HomePage();


When(/я перехожу по ссылке/, async () => {
    await basePage.open(URLs.HOME)
});

When(/я нажимаю на ссылку "Каталог" в заголовке/, async () => {
    const selector = homePage.hrefCatalog;
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