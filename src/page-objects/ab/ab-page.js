const SiteUrls = require('../../config/site-urls');

class AbPage {
	constructor() {
		this.elements = {
			'Заголовок раздела Автобарахолка': this.headerAbSection,
			'Поле ввода страны': this.inputCountryFilter,
		};
	}

	get headerAbSection() {
		return '//h1[contains(text(), "Автобарахолка")]';
	}

	get inputCountryFilter() {
		return '(//div[contains(@class,"vehicle-form__line")]/div/div[1])[1]/div[1]';
	}

	getURL() {
		return SiteUrls.AB;
	}
}

module.exports = AbPage;
