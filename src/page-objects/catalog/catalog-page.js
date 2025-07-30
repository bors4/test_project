const SiteUrls = require('../../config/site-urls');
const BasePage = require('../header/base-header');

class CatalogPage extends BasePage {
	constructor() {
		super();

		this.elements = {
			'Заголовок раздела Каталог': this.headerCatalogSection,
			'Заголовок раздела Популярные категории': this.headerPopularCategorySection,
		};
	}

	get headerCatalogSection() {
		return '//h1[contains(text(), "Каталог")]';
	}

	get headerPopularCategorySection() {
		return '//h2[contains(text(), "Популярные категории")]';
	}

	getURL() {
		return SiteUrls.CATALOG;
	}
}

module.exports = CatalogPage;
