const HomePage = require('./home/home-page');
const AbPage = require('./ab/ab-page');
const BaseHeader = require('./header/base-header');
const CatalogPage = require('./catalog/catalog-page');
const RPage = require('./r/r-page');
const TasksPage = require('./tasks/tasks-page');
const ForumPage = require('./forum/forum-page');
const CleverPage = require('./header/clever/clever-page');
const KursPage = require('./kurs/kurs-page');
const PogodaPage = require('./pogoda/pogoda-page');
const CartPage = require('./cart/cart-page');
const AutoPage = require('./auto/auto-page');
const PeoplePage = require('./people/people-page');
const MoneyPage = require('./money/money-page');
const TechPage = require('./tech/tech-page');
const RealtPage = require('./realt/realt-page');
const SearchModal = require('./header/search/search-modal');
const CatalogMobileCat = require('./catalog/cat/electronics/catalog-mobile-page');
const CatalogPricesPage = require('./catalog/catalog-prices-page');
const AuthorizationModal = require('./home/auth-modal');

const frameUtils = require('../utils/frame-utils');

const { expect, assert } = require('chai');
require('dotenv').config();

class PageObjects {
	constructor() {
		this.elements = {
			'Кнопка Принять все cookie': this.buttonAcceptAllCookies,
			'Модальное окно поиска': this.frameSearchModal,
		};

		this.pages = {
			'Главная страница': new HomePage(),
			'Заголовок страницы': new BaseHeader(),
			'Страница Автобарахолка': new AbPage(),
			'Страница Каталог': new CatalogPage(),
			'Страница Дома и квартиры': new RPage(),
			'Страница Услуги': new TasksPage(),
			'Страница Форум': new ForumPage(),
			'Модальное окно поиска': new SearchModal(),
			'Страница Клевер Onliner': new CleverPage(),
			'Страница Курсы валют': new KursPage(),
			'Страница Погода': new PogodaPage(),
			'Страница Корзина': new CartPage(),
			'Страница Люди': new PeoplePage(),
			'Страница Авто': new AutoPage(),
			'Страница Кошелек': new MoneyPage(),
			'Страница Технологии': new TechPage(),
			'Страница Недвижимость': new RealtPage(),
			'Страница каталог Мобильные телефоны': new CatalogMobileCat(),
			'Страница Предложения продавцов': new CatalogPricesPage(),
			'Модальное окно авторизации': new AuthorizationModal(),
		};
	}

	get buttonAcceptAllCookies() {
		return '//a[@id="submit-button"]';
	}

	get frameSearchModal() {
		return '//*[@id="fast-search-modal"]//iframe';
	}

	getPageObject(pageName) {
		return this.pages[pageName];
	}

	async cookieAccept() {
		const cookieButton = await $(this.buttonAcceptAllCookies);
		await cookieButton.waitForClickable({ timeout: 10000 });
		await cookieButton.click();
		await cookieButton.waitForDisplayed({ reverse: true, timeout: 10000 });
	}

	async getElement(elementName, pageName) {
		const element = await $(this.getPageObject(pageName).elements[elementName]);
		await element.waitForExist();
		return element;
	}

	async getElements(elementName, pageName) {
		const elements = await $$(this.getPageObject(pageName).elements[elementName]);
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
		console.log(elementText);
		assert.isNotEmpty(elementText);
		return elementText;
	}

	async hoverElement(elementName, pageName) {
		const element = await this.getElement(elementName, pageName);
		await element.moveTo();
		try {
			await element.isDisplayed({ withinViewport: true });
		} catch (error) {
			throw new Error(`Элемент "${element}" не находится в области видимости: ${error}`);
		}
	}

	async openPageByName(pageName) {
		const page = this.getPageObject(pageName);
		const element = $(page.siteLogo);
		await browser.url(page.getURL());
		const currentUrl = await browser.getUrl();
		assert(currentUrl.includes(page.getURL(), `Ожидался URL: ${page.getURL()}, но получен: ${currentUrl}`));
		try {
			element.waitForDisplayed();
		} catch (error) {
			throw new Error(`Логотип сайта отсутствует: ${error}`);
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
		await elements[index].waitForClickable();
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
				throw new Error(`Текст не был вставлен: ${error}`);
			}
		}
	}
}

module.exports = PageObjects;
