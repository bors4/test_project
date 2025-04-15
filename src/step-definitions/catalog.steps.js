const { Given, When, Then } = require('@wdio/cucumber-framework');
const URLs = require('../config/constants');
const CatalogPage = require('../pageobjects/catalog.page');

const catalogPage = new CatalogPage();



Then(/я вижу заголовок раздела "Каталог"/, async () => {
    const logo = browser.$(catalogPage.locators.h_catalog)
    expect(logo).toExist()
});

Then(/я вижу заголовок раздела "Популярные разделы"/, async () => {
    const logo = browser.$(catalogPage.locators.h_popular)
    expect(logo).toExist()
})