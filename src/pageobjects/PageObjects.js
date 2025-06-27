const HomePage = require("./home/home.page");
const AbPage = require("./ab/ab.page");
const BaseHeader = require("./header/BaseHeader");
const CatalogPage = require("./catalog/catalog.page");
const RPage = require("./r/r.page");
const TasksPage = require("./tasks/tasks.page");
const ForumPage = require("./forum/forum.page");
const CleverPage = require("./header/clever/clever.page");
const KursPage = require("./kurs/kurs.page");
const PogodaPage = require("./pogoda/pogoda.page");
const CartPage = require("./cart/cart.page");
const AutoPage = require("./auto/auto.page");
const PeoplePage = require("./people/people.page");
const MoneyPage = require("./money/money.page");
const TechPage = require("./tech/tech.page");
const RealtPage = require("./realt/realt.page");
const SearchModal = require("./header/search/SearchModal");

const assert = require("assert");

class PageObjects {
	constructor() {
		this.elements = {
			"кнопка Принять все cookie": '//a[@id="submit-button"]',
			"фрейм окно поиска": '//*[@id="fast-search-modal"]/div/div/iframe'
		};

		this.pages = {
			"главная страница": new HomePage(),
			"заголовок страницы": new BaseHeader(),
			"страница Автобарахолка": new AbPage(),
			"страница Каталог": new CatalogPage(),
			"страница Дома и квартиры": new RPage(),
			"страница Услуги": new TasksPage(),
			"страница Форум": new ForumPage(),
			"модальное окно поиска": new SearchModal(),
			"страница Клевер Onliner": new CleverPage(),
			"страница Курсы валют": new KursPage(),
			"страница Погода": new PogodaPage(),
			"страница Корзина": new CartPage(),
			"страница Люди": new PeoplePage(),
			"страница Авто": new AutoPage(),
			"страница Кошелек": new MoneyPage(),
			"страница Технологии": new TechPage(),
			"страница Недвижимость": new RealtPage()
		};
	}

	getPageObject(pageName) {
		return this.pages[pageName];
	}

	async getElement(elementName, pageName) {
		//console.log("element:" + elementName + "And pageName:" + pageName)
		//console.log("element:" + this.getPage(pageName).elements[elementName])
		const element = await $(this.getPageObject(pageName).elements[elementName]);
		await element.waitForExist();
		return element;
	}

	async hoverElement(elementName, pageName) {
		const element = await this.getElement(elementName, pageName);
		await element.waitForDisplayed();
		await element.moveTo();
	}

	async openPageByName(pageName) {
		const page = this.getPageObject(pageName);
		const element = $(page.elements["Лого сайта"]);
		await browser.url(page.getURL());
		const currentUrl = await browser.getUrl();
		assert(
			currentUrl.includes(
				page.getURL(),
				`Ожидался URL: ${page.getURL()}, но получен: ${currentUrl}`
			)
		);
		try {
			element.waitForDisplayed();
		} catch (error) {
			throw new Error("Логотип отсутствует");
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

	async setTextTo(elementName, pageName, textToInsert) {
		const element = await this.getElement(elementName, pageName);
		try {
			console.log(`Вставляемый текст: ${textToInsert}`);
			await element.waitForDisplayed();
			await element.setValue(textToInsert);
		} catch (error) {
			throw new Error("Текст не был вставлен");
		}
	}
}

module.exports = PageObjects;
