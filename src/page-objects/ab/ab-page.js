const SiteUrls = require('../../config/site-urls');

class AbPage {
	constructor() {

		this.elements = {
			'Заголовок раздела Автобарахолка': this.headerAbSection,
			'Поле ввода страны раздела фильтра': this.inputCountryFilterSection,
			'Дропдаун списка стран для фильтра': this.dropdownCountriesList,
			'Контейнер дропдауна списка марок авто для фильтра': this.containerDropdownCarModelList,
			'Поле ввода названия страны фильтра': this.inputCountryFilter,
			'Список стран фильтра': this.listCountries,
			'Поле ввода марки авто раздела фильтра': this.inputCarBrandFilterSection,
			'Тайтл фильтра Местонахождение': this.titleLocation,
			'Тайтл фильтра Марка': this.titleCarBrand,
			
		};
	}

	get headerAbSection() {
		return '//h1[contains(text(), "Автобарахолка")]';
	}

	get inputCountryFilterSection() {
		return '(//div[contains(@class,"vehicle-form__line")]/div/div[1])[1]/div[1]';
	}

	get inputCarBrandFilterSection() {
		return '(//div[contains(@class,"vehicle-form__line")]/div/div[1])[5]/div[1]';
	}

	get dropdownCountriesList() {
		return '(//div[contains(@class,"vehicle-form__line")]/div/div[1])[1]/div[1]//div[contains(@class,"dropdown-style_right")]';
	}

	get inputCountryFilter() {
		return '//input[@placeholder="Найти страну"]';
	}

	get listCountries() {
		return `(//div[contains(@class,"dropdown-style_right")])[1]//ul[@tabindex="0"]/li`;
	}

	get titleLocation () {
		return '//div[contains(text(),"Местонахождение")]';
	}

	get titleCarBrand() {
		return '//div[contains(text(),"Марка")]';
	}

	get containerDropdownCarModelList () {
		return '(//div[@class="dropdown-style__container"])[4]';
	}

	getURL() {
		return SiteUrls.AB;
	}
}

module.exports = AbPage;
