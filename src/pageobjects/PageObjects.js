const HomePage = require('./home/home.page');
const AbPage = require('./ab/ab.page');
const BaseHeader = require('./header/BaseHeader');
const CatalogPage = require('./catalog/catalog.page');
const RPage = require('./r/r.page');
const TasksPage = require('./tasks/tasks.page');
const ForumPage = require('./forum/forum.page');
const CleverPage = require('./header/clever/clever.page');
const KursPage = require('./kurs/kurs.page');
const PogodaPage = require('./pogoda/pogoda.page');
const CartPage = require('./cart/cart.page');
const AutoPage = require('./auto/auto.page');
const PeoplePage = require('./people/people.page');
const MoneyPage = require('./money/money.page');
const TechPage = require('./tech/tech.page');
const RealtPage = require('./realt/realt.page');
const SearchModal = require('./header/search/SearchModal');
const CatalogMobileCat = require('./catalog/cat/electronics/catalog.mobile.page');
const CatalogPricesPage = require('./catalog/catalog.prices.page');
const AutorizationModal = require('./home/auth.modal');

const frameUtils = require('../utils/frameUtils');

const { expect, assert } = require('chai');
require('dotenv').config();

class PageObjects {
	constructor() {
		this.elements = {
			'кнопка Принять все cookie': '//a[@id="submit-button"]',
			'фрейм окно поиска': '//*[@id="fast-search-modal"]/div/div/iframe',
		};

		this.pages = {
			'главная страница': new HomePage(),
			'заголовок страницы': new BaseHeader(),
			'страница Автобарахолка': new AbPage(),
			'страница Каталог': new CatalogPage(),
			'страница Дома и квартиры': new RPage(),
			'страница Услуги': new TasksPage(),
			'страница Форум': new ForumPage(),
			'модальное окно поиска': new SearchModal(),
			'страница Клевер Onliner': new CleverPage(),
			'страница Курсы валют': new KursPage(),
			'страница Погода': new PogodaPage(),
			'страница Корзина': new CartPage(),
			'страница Люди': new PeoplePage(),
			'страница Авто': new AutoPage(),
			'страница Кошелек': new MoneyPage(),
			'страница Технологии': new TechPage(),
			'страница Недвижимость': new RealtPage(),
			'страница каталог Мобильные телефоны': new CatalogMobileCat(),
			'страница Предложения продавцов': new CatalogPricesPage(),
			'модальное окно авторизации': new AutorizationModal(),
		};
	}

	getPageObject(pageName) {
		return this.pages[pageName];
	}

	async cookieAccept() {
		const cookieButton = await $(this.elements['кнопка Принять все cookie']);
		await cookieButton.waitForExist({ timeout: 10000 });
		await cookieButton.waitForDisplayed();
		await cookieButton.waitForClickable();
		await cookieButton.click();
		await cookieButton.waitForDisplayed({ reverse: true, timeout: 10000 });
		await frameUtils.switchToParent();
	}

	async getElement(elementName, pageName) {
		const element = await $(this.getPageObject(pageName).elements[elementName]);
		await element.waitForExist();
		return element;
	}

	async getElements(elementName, pageName) {
		const elements = await $$(this.getPageObject(pageName).elements[elementName]);
		await browser.waitUntil(async () => (await elements).length > 0, {
			timeout: 10000,
			timeoutMsg: `Элементы "${elementName}" не обнаружен`,
			interval: 500,
		});
		return elements;
	}

	async getElementText(elementName, pageName) {
		const element = await this.getElement(elementName, pageName);
		const elementText = await element.getText();
		assert.isNotEmpty(elementText);
		return elementText;
	}

	async getElementTextByIndex(elementName, index, pageName) {
		const elements = await this.getElements(elementName, pageName);
		const elementText = await elements[index].getText();
		assert.isNotEmpty(elementText);
		return elementText;
	}

	async hoverElement(elementName, pageName) {
		const element = await this.getElement(elementName, pageName);
		await element.moveTo();
		try {
			await element.isDisplayed({ withinViewport: true });
		} catch (error) {
			throw new Error(`Элемент "${element}" не находится в области видимости`);
		}
	}

	async openPageByName(pageName) {
		const page = this.getPageObject(pageName);
		const element = $(page.elements['Лого сайта']);
		await browser.url(page.getURL());
		const currentUrl = await browser.getUrl();
		assert(currentUrl.includes(page.getURL(), `Ожидался URL: ${page.getURL()}, но получен: ${currentUrl}`));
		try {
			element.waitForDisplayed();
		} catch (error) {
			throw new Error('Логотип отсутствует');
		}
	}

	getUrlByPageName(pageName) {
		const page = this.getPageObject(pageName);
		return page.getURL();
	}

	async clickOnElement(elementName, pageName) {
		const element = await this.getElement(elementName, pageName);
		await element.waitForClickable();
		await element.click();
	}

	async clickOnElementByIndex(elementName, index, pageName) {
		const elements = await this.getElements(elementName, pageName);
		await browser.waitUntil(async () => (await elements).length > 0, { timeout: 5000, timeoutMsg: `Элементы "${elementName}" не найдены` });
		await elements[index].click();
	}

	async setTextTo(elementName, pageName, textToInsert) {
		const element = await this.getElement(elementName, pageName);
		await element.waitForDisplayed();
		if (textToInsert === 'login' || textToInsert === 'password') {
			textToInsert === 'login' ? await element.setValue(process.env.TEST_USER_LOGIN) : await element.setValue(process.env.TEST_USER_PASSWORD);
			console.log(`Вставляемый текст: ${textToInsert}`);
		} else {
			try {
				console.log(`Вставляемый текст: ${textToInsert}`);
				await element.setValue(textToInsert);
			} catch (error) {
				throw new Error('Текст не был вставлен');
			}
		}
	}
}

module.exports = PageObjects;
