const {When} = require('@wdio/cucumber-framework');
const BaseHeader = require('../pageobjects/BaseHeader');
const URLs = require('../config/constants');

const baseHeader = new BaseHeader();

When(/я перехожу по ссылке/, async () => {
    await baseHeader.open(URLs.HOME)
});

When(/я нажимаю на "([^"]*)" в заголовке/, async (element) => {
    const locator = baseHeader.elements[element];
    await baseHeader.hrefClick(locator);
});

When(/я нажимаю на поле ввода названия товара/, async () => {
    await $(baseHeader.inputSearch).click();
  });

When(/я ввожу название товара/, async () => {
    await baseHeader.setTextToSearch();
});