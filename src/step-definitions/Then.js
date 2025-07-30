const { Then } = require('@wdio/cucumber-framework');
const BaseHeader = require('../page-objects/header/base-header');
const PageObjects = require('../page-objects/page-objects');
const { expect: expectChai } = require('chai');

const baseHeader = new BaseHeader();
const pageobjects = new PageObjects();

Then(/я вижу "([^"]*)" на "([^"]*)"/, async (elementName, pageName) => {
	const element = await pageobjects.getElement(elementName, pageName);
	await element.isDisplayed();
});

Then(/я вижу чекбокс "([^"]*)"/, async (elementName) => {
	const element = await $(baseHeader.elements[elementName]);
	await browser.switchFrame($('iframe'));
	await element.isDisplayed();
});

Then(/я вижу текст "([^"]*)" в "([^"]*)" для "([^"]*)"/, async (text, elementName, pageName) => {
	const searchInput = pageobjects.getElement(elementName, pageName);
	if (text.includes('Например')) expect(searchInput.toHaveAttr('placeholder', expect.stringContaining('Например')));
	else expect(await pageobjects.getElement('Текст Ничего не найдено', pageName)).toHaveText('Ничего не найдено');
});

Then(/я вижу что "([^"]*)" на "([^"]*)" содержит текст "([^"]*)"/, async (elementName, pageName, elementText) => {
	const text = await pageobjects.getElementText(elementName, pageName);
	expectChai(text).to.include(elementText);
});

Then(/я проверяю что нахожусь на "([^"]*)"/, async (pageName) => {
	await expect(browser).toHaveUrl(expect.stringContaining(pageobjects.getUrlByPageName(pageName)));
});

Then(
	/я вижу что "([^"]*)" на "([^"]*)" имеет атрибут "([^"]*)" со значением "([^"]*)"/,
	async (elementName, pageName, attributeName, attributeValue) => {
		const element = await pageobjects.getElement(elementName, pageName);
		const attribute = await element.getCSSProperty(attributeName);
		switch (attributeValue) {
			case attributeValue.includes('#'):
				const hexColor = attribute.parsed.hex;
				expect(hexColor.includes(attributeValue));
				break;
		}
	}
);

Then(/я вижу что курсы валют равны/, function () {
	expectChai(this.elementText).to.equal('$ ' + this.apiExchangeRate.replace('.', ','));
});

Then(/я вижу что "([^"]*)"\[(\d+)\] на "([^"]*)" равен сохранённому/, async function (elementName, index, pageName) {
	const elementText = await pageobjects.getElementTextByIndex(elementName, index, pageName);
	expectChai(elementText).to.equal(this.elementText);
});
