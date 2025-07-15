const SiteUrls = require('../../../../config/site.urls');

class CatalogMobileCat {
	constructor() {
		this.elements = {
			'раздел Мобильные телефоны': '//h1[contains(text(),"Мобильные телефоны")]',
			'кнопка предложения': '//a[contains(text(),"предложени")]',
			'названия товара': '//a[contains(@class,"catalog-form__link_font-weight_semibold")]',
		};
	}

	getURL() {
		return SiteUrls.CATALOG_MOBILE;
	}
}

module.exports = CatalogMobileCat;
