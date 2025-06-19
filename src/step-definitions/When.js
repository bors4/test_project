const { When } = require("@wdio/cucumber-framework");
const BaseHeader = require("../pageobjects/BaseHeader");
const PageObjects = require("../pageobjects/PageObjects");
const SearchModal = require("../pageobjects/SearchModal");

const baseHeader = new BaseHeader();
const pageobjects = new PageObjects();
const searchmodal = new SearchModal();

When(/я нажимаю на "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
	await pageobjects.clickOnElement(elementName, pageName);
});

When(/я беру текст из примера в плейсхолдере поля поиска и ввожу в "([^"]*)" в "([^"]*)"/, async (elementName, pageName) => {
	const textToSearch = await baseHeader.getTextFromSearchInput();
	pageobjects.setTextTo(elementName, pageName, textToSearch);
});

When(/я ввожу "([^"]*)" в "([^"]*)" на "([^"]*)"/, async (text, elementName, pageName) => {
	await pageobjects.setTextTo(elementName, pageName, text);
});

When(/я переключаю контекст на "([^"]*)"/, async (sourceContext) => {
	await searchmodal.switchContextTo(sourceContext);
});

When(/я навожу указатель мыши на "([^"]*)" на "([^"]*)"/, async (element, pageName) => {
	await pageobjects.hoverElement(element, pageName);
});

When(/я обновляю страницу/, async () => {
	browser.refresh();
});
