const { Given, When, Then } = require('@wdio/cucumber-framework');
const URLs = require('../config/constants');
const CatalogPage = require('../pageobjects/catalog.page');

const catalogPage = new CatalogPage();

Then(/я вижу заголовок раздела "Каталог"/, async () => {
    const logo = $(catalogPage.h_catalog)
    console.log(typeof logo)
    expect(logo).toExist()
});

Then(/я вижу заголовок раздела "Популярные разделы"/, async () => {
    const logo = $(catalogPage.h_popular)
    expect(logo).toExist()
})