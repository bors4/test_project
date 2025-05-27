const { When } = require('@wdio/cucumber-framework');
const BaseHeader = require('../pageobjects/BaseHeader');
const URLs = require('../config/constants');
const PageObjects = require('../pageobjects/PageObjects');
const SearchModal = require('../pageobjects/SerchModal');

const baseHeader = new BaseHeader();
const pageobjects = new PageObjects()
const searchmodal = new SearchModal()
When(/я перехожу по ссылке/, async () => {
    await pageobjects.open(URLs.HOME)
});

When(/я нажимаю на "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
    const element = pageobjects.getElement(elementName, pageName)
    await $(element).click()
});

When(/я ввожу "([^"]*)" в "([^"]*)" на "([^"]*)"/, async (text, elementName, pageName) => {
    const element = pageobjects.getElement(elementName, pageName)
    const textToSearch = await baseHeader.getTextFromSearchInput(element)
    (text.includes('text')) ? await baseHeader.setTextToSearch(element, textToSearch) : await baseHeader.setTextToSearch(element, text)
});

When(/я переключаю контекст на "([^"]*)"/, async (sourceContext) => {
    await searchmodal.switchContextTo(sourceContext)
})

When(/я обновляю страницу/, async () => {
    browser.refresh();
})