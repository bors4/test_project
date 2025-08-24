const SiteUrls = require('../../config/site-urls');

/**
 * Класс для использования на странице "Автобарахолка".
 * На страницу можно перейти по URL - https://ab.onliner.by
 */

class AbPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Заголовок раздела Автобарахолка': AbPage.headerAbSection,
      'Поле ввода страны раздела фильтра': AbPage.inputCountryFilterSection,
      'Дропдаун списка стран для фильтра': AbPage.dropdownCountriesList,
      'Контейнер дропдауна списка марок авто для фильтра': AbPage.containerDropdownCarModelList,
      'Поле ввода названия страны фильтра': AbPage.inputCountryFilter,
      'Список стран фильтра': AbPage.listCountries,
      'Марка авто BMW': AbPage.carBrandBMW,
      'Поле ввода марки авто раздела фильтра': AbPage.inputCarBrandFilterSection,
      'Тайтл фильтра Местонахождение': AbPage.titleLocation,
      'Тайтл фильтра Марка': AbPage.titleCarBrand,
      'Тайтл Цена': AbPage.titlePrice,
      'Ссылка валюты покупки USD': AbPage.linkCurrencyUSD,
      'Поле стоимости авто До': AbPage.inputAutoPriceLess,
      'Тайтл Год выпуска': AbPage.titleYearMade,
      'Список Год выпуска С': AbPage.selectYearMadeOptions,
      'Чекбокс Тип двигателя Бензин': AbPage.checkboxPetrolEngine,
      'Список Тегов фильтра': AbPage.listFilterTags,
      'Карточка продаваемого авто': AbPage.vehicleOfferItem,
    };
  }

  static get headerAbSection() {
    return '//h1[contains(text(), "Автобарахолка")]';
  }

  static get inputCountryFilterSection() {
    return '(//div[contains(@class,"vehicle-form__line")]/div/div[1])[1]/div[1]';
  }

  static get inputCarBrandFilterSection() {
    return '(//div[contains(@class,"vehicle-form__line")]/div/div[1])[5]/div[1]';
  }

  static get dropdownCountriesList() {
    return '(//div[contains(@class,"vehicle-form__line")]/div/div[1])[1]/div[1]//div[contains(@class,"dropdown-style_right")]';
  }

  static get inputCountryFilter() {
    return '//input[@placeholder="Найти страну"]';
  }

  static get listCountries() {
    return `(//div[contains(@class,"dropdown-style_right")])[1]//ul[@tabindex="0"]/li`;
  }

  static get carBrandBMW() {
    return '//div[text()="BMW"]';
  }

  static get titleLocation() {
    return '//div[contains(text(),"Местонахождение")]';
  }

  static get titleCarBrand() {
    return '//div[contains(text(),"Марка")]';
  }

  static get titlePrice() {
    return '(//div[contains(text(),"Цена")])[1]';
  }

  static get containerDropdownCarModelList() {
    return '(//div[@class="dropdown-style__container"])[4]';
  }

  static get linkCurrencyUSD() {
    return '(//div/a[contains(@class,"vehicle-form__link_base")])[2]';
  }

  static get inputAutoPriceLess() {
    return '(//input[@placeholder="до"])[1]';
  }

  static get titleYearMade() {
    return '//div[text()="Год выпуска"]';
  }

  static get selectYearMadeOptions() {
    return '//div[normalize-space()="с"]/following-sibling::select';
  }

  static get checkboxPetrolEngine() {
    return '//div[normalize-space()="Бензин"]/../../div[@class="i-checkbox__faux"]';
  }

  static get vehicleOfferItem() {
    return '//div[@class="vehicle-form__offers-item"]';
  }

  static get listFilterTags() {
    return '//div[contains(@class,"vehicle-form__button_tag")]';
  }

  static getURL() {
    return SiteUrls.AB;
  }
}

module.exports = AbPage;
