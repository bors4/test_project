const { When } = require('@wdio/cucumber-framework');
const BaseHeader = require('../pageobjects/BaseHeader');
const URLs = require('../config/constants');
const PageObjects = require('../pageobjects/PageObjects');

const baseHeader = new BaseHeader();
const pageobjects = new PageObjects()

When(/я перехожу по ссылке/, async () => {
    await baseHeader.open(URLs.HOME)
});

When(/я нажимаю на "([^"]*)" в заголовке/, async (element) => {
    const locator = baseHeader.elements[element]
    await baseHeader.hrefClick(locator);
});

When(/я нажимаю на "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
    const element = pageobjects.getElement(elementName, pageName)
    await $(element).click();
});

When(/я ввожу "([^"]*)" в "([^"]*)" на "([^"]*)"/, async (text, elementName, pageName) => {
    const element = pageobjects.getElement(elementName, pageName)
    const textToSearch = await baseHeader.getTextFromSearchInput(element);
    if (text.includes('text')) {
        await baseHeader.setTextToSearch(element, textToSearch)
    }
    else {
        await baseHeader.setTextToSearch(element, text)
    }
    await browser.setTimeout({ 'implicit': 5000 })
});