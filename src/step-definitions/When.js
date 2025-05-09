const {When} = require('@wdio/cucumber-framework');
const BasePage = require('../pageobjects/base.page');
const HomePage = require('../pageobjects/home/home.page');
const URLs = require('../config/constants');

const basePage = new BasePage();
const homePage = new HomePage();


When(/я перехожу по ссылке/, async () => {
    await basePage.open(URLs.HOME)
});

let a = /([^"]*)/

When(/я нажимаю на ссылку "([^"]*)" в заголовке/, async (element) => {
    element = homePage.hrefCatalog
    console.log(element)
    await homePage.hrefCatalogClick();
});

When(/я нажимаю на поле ввода названия товара/, async () => {
    await $(homePage.inputSearch).click();
  });

When(/я ввожу название товара/, async () => {
    await homePage.setTextToSearch();
});