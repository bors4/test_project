const { Then } = require("@wdio/cucumber-framework");
const BaseHeader = require("../pageobjects/header/BaseHeader");
const PageObjects = require("../pageobjects/PageObjects");

const baseHeader = new BaseHeader();
const pageobjects = new PageObjects();

Then(/я вижу компонент "([^"]*)"/, async (elementName) => {
	const element = $(baseHeader.elements[elementName]);
	await element.isDisplayed();
});

Then(/я вижу "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
	const element = await pageobjects.getElement(elementName, pageName);
	await element.isDisplayed();
});

Then(/я вижу чекбокс "([^"]*)"/, async (elementName) => {
	const element = await $(baseHeader.elements[elementName]);
	await browser.switchFrame($("iframe"));
	await element.isDisplayed();
});

Then(/я вижу текст "([^"]*)" в "([^"]*)" для "([^"]*)"/, async (text, elementName, pageName) => {
	const searchInput = pageobjects.getElement(elementName, pageName);
	if (text.includes("Например"))
		await expect(searchInput.toHaveAttr("placeholder", expect.stringContaining("Например")));
	else expect(await pageobjects.getElement("Ничего не найдено", pageName)).toHaveText("Ничего не найдено");
});

Then(/я вижу заголовок раздела "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
	const page = pageobjects.getPage(pageName);
	const section = $(page.elements[elementName]);
	await section.isDisplayed();
});
