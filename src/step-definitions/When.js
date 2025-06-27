const { When } = require("@wdio/cucumber-framework");
const BaseHeader = require("../pageobjects/header/BaseHeader");
const PageObjects = require("../pageobjects/PageObjects");
const SearchModal = require("../pageobjects/header/search/SearchModal");
const BrowserUtils = require("../utils/browserUtils");

const baseHeader = new BaseHeader();
const pageobjects = new PageObjects();
const searchmodal = new SearchModal();
const browserUtils = new BrowserUtils();

When(/я нажимаю на "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
	await pageobjects.clickOnElement(elementName, pageName);
});

When(
	/я беру текст из примера в плейсхолдере поля поиска и ввожу в "([^"]*)" в "([^"]*)"/,
	async (elementName, pageName) => {
		const textToSearch = await baseHeader.getTextFromSearchInput();
		pageobjects.setTextTo(elementName, pageName, textToSearch);
	}
);

When(
	/я ввожу "([^"]*)" в "([^"]*)" на "([^"]*)"/,
	async (text, elementName, pageName) => {
		await pageobjects.setTextTo(elementName, pageName, text);
	}
);

When(/я переключаю контекст на "([^"]*)"/, async (sourceContext) => {
	await searchmodal.switchContextTo(sourceContext);
});

When(
	/я навожу указатель мыши на "([^"]*)" на "([^"]*)"/,
	async (element, pageName) => {
		await pageobjects.hoverElement(element, pageName);
	}
);

When(/я перехожу на неактивную вкладку в браузере/, async () => {
	await browserUtils.switchWindow();
});

When(
	/я скролю к "([^"]*)" на странице "([^"]*)"/,
	async (elementName, pageName) => {
		const element = await pageobjects.getElement(elementName, pageName);
		await browserUtils.scrollTo(element);
	}
);

When(/я обновляю страницу/, async () => {
	browser.refresh();
});

When(/я нажимаю на кнопку "([^"]*)" браузера/, async (actionName) => {
	browserUtils.browserAction(actionName);
});
