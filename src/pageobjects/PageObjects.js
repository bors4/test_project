const AbPage = require("./ab/ab.page");
const BaseHeader = require("./BaseHeader");
const CatalogPage = require("./catalog/catalog.page");
const RPage = require("./r/r.page");
const TasksPage = require("./tasks/tasks.page");
const ForumPage = require("./forum/forum.page");
const SearchModal = require("./SerchModal");
const { setExecuteTimeout } = require("../utils/pageUtils");

class PageObjects {
	constructor() {
		this.elements = {
			"кнопка Принять все cookie": '//a[@id="submit-button"]',
			"фрейм окно поиска": '//*[@id="fast-search-modal"]/div/div/iframe',
		};

		this.pages = {
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
		return this.getPage(pageName).elements[elementName];
	}

	async open(path) {
		await browser.url(path);
	}

	async clickOnElement(elementName, pageName) {
		const element = $(this.getElement(elementName, pageName));
		await element.waitForDisplayed({ timeout: 10000 });
		await element.click();
	}
}

module.exports = PageObjects;
