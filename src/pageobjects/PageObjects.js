const AbPage = require("./ab/ab.page");
const BaseHeader = require("./BaseHeader");
const CatalogPage = require("./catalog/catalog.page");
const RPage = require("./r/r.page");
const TasksPage = require("./tasks/tasks.page");
const ForumPage = require("./forum/forum.page");
const SearchModal = require("./SerchModal");
const { setExecuteTimeout } = require("../utils/pageUtils");
const HomePage = require("./home/home.page");
const assert = require("assert");

class PageObjects {
	constructor() {
		this.elements = {
			"кнопка Принять все cookie": '//a[@id="submit-button"]',
			"фрейм окно поиска": '//*[@id="fast-search-modal"]/div/div/iframe',
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
		};
	}

	getPage(pageName) {
		return this.pages[pageName];
	}

	getElement(elementName, pageName) {
		//console.log("element:" + elementName + "And pageName:" + pageName)
		//console.log("element:" + this.getPage(pageName).elements[elementName])
		return $(this.getPage(pageName).elements[elementName]);
	}

	async hoverElement(elementName, pageName) {
		const element = this.getElement(elementName, pageName);
		await element.waitForDisplayed({ timeout: 10000 });
		await element.moveTo();
	}

	async open(pageName) {
		const page = this.getPage(pageName);
		const element = $(page.elements["Лого сайта"]);
		await browser.url(page.getURL());
		const currentUrl = await browser.getUrl();
		assert(
			currentUrl.includes(
				page.getURL(),
				`Ожидался URL: ${page.getURL()}, но получен: ${currentUrl}`,
			),
		);
		try {
			element.waitForDisplayed({ timeout: 3000 });
		} catch (error) {
			throw new Error("Логотип отсутствует");
		}
	}

	async clickOnElement(elementName, pageName) {
		const element = this.getElement(elementName, pageName);
		await element.waitForClickable({ timeout: 10000 });
		await element.click();
	}
}

module.exports = PageObjects;
