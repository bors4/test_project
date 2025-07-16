const { When } = require('@wdio/cucumber-framework');
const BaseHeader = require('../pageobjects/header/BaseHeader');
const PageObjects = require('../pageobjects/PageObjects');
const SearchModal = require('../pageobjects/header/search/SearchModal');
const BrowserUtils = require('../utils/browserUtils');
const APIUtils = require('../utils/APIUtils');

const baseHeader = new BaseHeader();
const pageobjects = new PageObjects();
const searchmodal = new SearchModal();
const browserUtils = new BrowserUtils();

When(/я принимаю cookie/, async () => {
	await pageobjects.cookieAccept();
});

When(/я жду \[(\d+)\] секунд/, async (timeToWait) => {
	browser.pause(5000);
	//await browserUtils.setExecuteTimeout(3000);
});

When(/я нажимаю на "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
	await pageobjects.clickOnElement(elementName, pageName);
});

When(/я нажимаю на "([^"]*)"\[(\d+)\] на "([^"]*)"/, async (elementName, index, pageName) => {
	await pageobjects.clickOnElementByIndex(elementName, index, pageName);
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

When(/я перехожу на неактивную вкладку в браузере/, async () => {
	await browserUtils.switchWindow();
});

When(/я скролю к "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
	const element = await pageobjects.getElement(elementName, pageName);
	await browserUtils.scrollTo(element);
});

When(/я обновляю страницу/, async () => {
	browser.refresh();
});

When(/я нажимаю на кнопку "([^"]*)" браузера/, async (actionName) => {
	browserUtils.browserAction(actionName);
});

When(/я с помощью API НБ РБ получаю курс "([^"]*)" на "([^"]*)"/, async function (currencyName, onDate) {
	this.apiExchangeRate = await APIUtils.getExchangeRate(currencyName, onDate);
});

When(/я сохраняю текст элемента "([^"]*)" на "([^"]*)"/, async function (elementName, pageName) {
	this.elementText = await pageobjects.getElementText(elementName, pageName);
});

When(/я сохраняю текст элемента "([^"]*)"\[(\d+)\] на "([^"]*)"/, async function (elementName, index, pageName) {
	this.elementText = await pageobjects.getElementTextByIndex(elementName, index, pageName);
});

When(/я прохожу капчу/, async function () {
	true;
});
