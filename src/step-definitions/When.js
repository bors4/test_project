const {When} = require('@wdio/cucumber-framework');
const BaseHeader = require('../pageobjects/BaseHeader');
const URLs = require('../config/constants');

const baseHeader = new BaseHeader();

When(/я перехожу по ссылке/, async () => {
    await baseHeader.open(URLs.HOME)
});

When(/я нажимаю на ссылку "([^"]*)" в заголовке/, async (element) => {
    element = baseHeader.elements[element]
    await baseHeader.hrefCatalogClick();
});

When(/я нажимаю на поле ввода названия товара/, async () => {
    await $(baseHeader.inputSearch).click();
  });

When(/я ввожу название товара/, async () => {
    await baseHeader.setTextToSearch();
});