const { Then } = require("@wdio/cucumber-framework");
const BaseHeader = require("../pageobjects/BaseHeader");
const PageObjects = require("../pageobjects/PageObjects");

const baseHeader = new BaseHeader();
const pageobjects = new PageObjects();

Then(/я вижу элемент "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
	const page = pageobjects.getPage(pageName);
	const element = $(page.elements[elementName]);
	element.isDisplayed();
});

Then(/я вижу компонент "([^"]*)"/, async (elementName) => {
	const element = $(baseHeader.elements[elementName]);
	//await element.waitForExist({timeout: 3000})
	await element.isDisplayed();
});

Then(/я вижу "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
	const element = $(pageobjects.getElement(elementName, pageName));
	await element.isDisplayed();
});

Then(/я вижу поле ввода для поиска товара/, async () => {
	const searchInput = browser.$(baseHeader.searchInput);
	await searchInput.isDisplayed();
});

Then(/я вижу текст примера товара для поиска/, async () => {
	const searchInput = await browser.$(baseHeader.searchInput);
	await expect(
		searchInput.toHaveAttr("placeholder", expect.stringContaining("Например")),
	);
});

Then(/я вижу окно результатов поиска/, async () => {
	await browser.switchFrame($("iframe"));
	const modalSearch = await browser.$(baseHeader.modalSearch);
	await modalSearch.isDisplayed();
});

Then(/я вижу чекбокс "([^"]*)"/, async (elementName) => {
	const element = await $(baseHeader.elements[elementName]);
	await browser.switchFrame($("iframe"));
	await element.isDisplayed();
});

Then(
	/я вижу текст "([^"]*)" в "([^"]*)" для "([^"]*)"/,
	async (text, elementName, pageName) => {
		const searchInput = $(pageobjects.getElement(elementName, pageName));
		if (text.includes("Например"))
			await expect(
				searchInput.toHaveAttr("placeholder", expect.stringContaining("Например")),
			);
		else
			expect(
				await $(pageobjects.getElement("Ничего не найдено", pageName)),
			).toHaveText("Ничего не найдено");
	},
);

Then(
	/я вижу заголовок раздела "([^"]*)" на "([^"]*)"/,
	async (elementName, pageName) => {
		const page = pageobjects.getPage(pageName);
		const section = $(page.elements[elementName]);
		await section.isDisplayed();
	},
);
