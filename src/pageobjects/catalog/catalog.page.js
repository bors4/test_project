const SiteUrls = require("../../config/site.urls");
const BasePage = require("../header/BaseHeader");

class CatalogPage extends BasePage {
	constructor() {
		super();

		this.elements = {
			"заголовок раздела Каталог": '//h1[contains(text(), "Каталог")]',
			"Популярные категории": '//h2[contains(text(), "Популярные категории")]'
		};
	}
	getURL() {
		return SiteUrls.CATALOG;
	}
}

module.exports = CatalogPage;
