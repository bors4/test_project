const { Then } = require("@wdio/cucumber-framework");
const BaseHeader = require("../pageobjects/header/BaseHeader");
const PageObjects = require("../pageobjects/PageObjects");

const baseHeader = new BaseHeader();
const pageobjects = new PageObjects();

Then(/я вижу "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
	const element = await pageobjects.getElement(elementName, pageName);
	await element.isDisplayed();
});

Then(/я вижу чекбокс "([^"]*)"/, async (elementName) => {
	const element = await $(baseHeader.elements[elementName]);
	await browser.switchFrame($("iframe"));
	await element.isDisplayed();
});

Then(
	/я вижу текст "([^"]*)" в "([^"]*)" для "([^"]*)"/,
	async (text, elementName, pageName) => {
		const searchInput = pageobjects.getElement(elementName, pageName);
		if (text.includes("Например"))
			await expect(
				searchInput.toHaveAttr("placeholder", expect.stringContaining("Например"))
			);
		else
			expect(
				await pageobjects.getElement("Ничего не найдено", pageName)
			).toHaveText("Ничего не найдено");
	}
);

Then(
	/я вижу заголовок раздела "([^"]*)" на "([^"]*)"/,
	async (elementName, pageName) => {
		const page = pageobjects.getPageObject(pageName);
		const section = $(page.elements[elementName]);
		await section.isDisplayed();
	}
);

Then(/я проверяю что нахожусь на странице "([^"]*)"/, async (pageName) => {
	await expect(browser).toHaveUrl(
		expect.stringContaining(pageobjects.getUrlByPageName(pageName))
	);
});

Then(
	/я вижу что "([^"]*)" на "([^"]*)" имеет атрибут "([^"]*)" со значением "([^"]*)"/,
	async (elementName, pageName, attributeName, attributeValue) => {
		const element = await pageobjects.getElement(elementName, pageName);
		const attribute = await element.getCSSProperty(attributeName);
		switch (attributeValue) {
			case attributeValue.includes("#"):
				const hexColor = attribute.parsed.hex;
				expect(hexColor.includes(attributeValue));
				break;
		}
	}
);

Then(/я вижу что курсы валют равны/, function () {
	expect(
		this.elementText.includes(String(this.apiExchangeRate).replace(".", ","))
	);
});
