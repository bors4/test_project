import siteUrls from '../../config/site-urls.js';

/**
 * Класс для использования на странице "Автобарахолка".
 * На страницу можно перейти по URL - https://ab.onliner.by
 */

class AbPage {
  constructor() {
    this.elements = {
      'Заголовок раздела Автобарахолка': this.headerAbSection,
      'Поле ввода страны раздела фильтра': this.inputCountryFilterSection,
      'Дропдаун списка стран для фильтра': this.dropdownCountriesList,
      'Контейнер дропдауна списка марок авто для фильтра': this.containerDropdownCarModelList,
      'Поле ввода названия страны фильтра': this.inputCountryFilter,
      'Список стран фильтра': this.listCountries,
      'Марка авто BMW': this.carBrandBMW,
      'Поле ввода марки авто раздела фильтра': this.inputCarBrandFilterSection,
      'Тайтл фильтра Местонахождение': this.titleLocation,
      'Тайтл фильтра Марка': this.titleCarBrand,
      'Тайтл Цена': this.titlePrice,
      'Ссылка валюты покупки USD': this.linkCurrencyUSD,
      'Поле стоимости авто До': this.inputAutoPriceLess,
      'Тайтл Год выпуска': this.titleYearMade,
      'Список Год выпуска С': this.selectYearMadeOptions,
      'Чекбокс Тип двигателя Бензин': this.checkboxPetrolEngine,
      'Список Тегов фильтра': this.listFilterTags,
      'Карточка продаваемого авто': this.vehicleOfferItem,
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

  get carBrandBMW() {
    return '//div[text()="BMW"]';
  }

  get titleLocation() {
    return '//div[contains(text(),"Местонахождение")]';
  }

  get titleCarBrand() {
    return '//div[contains(text(),"Марка")]';
  }

  get titlePrice() {
    return '(//div[contains(text(),"Цена")])[1]';
  }

  get containerDropdownCarModelList() {
    return '(//div[@class="dropdown-style__container"])[4]';
  }

  get linkCurrencyUSD() {
    return '(//div/a[contains(@class,"vehicle-form__link_base")])[2]';
  }

  get inputAutoPriceLess() {
    return '(//input[@placeholder="до"])[1]';
  }

  get titleYearMade() {
    return '//div[text()="Год выпуска"]';
  }

  get selectYearMadeOptions() {
    return '//div[normalize-space()="с"]/following-sibling::select';
  }

  get checkboxPetrolEngine() {
    return '//div[normalize-space()="Бензин"]/../../div[@class="i-checkbox__faux"]';
  }

  get vehicleOfferItem() {
    return '//div[@class="vehicle-form__offers-item"]';
  }

  get listFilterTags() {
    return '//div[contains(@class,"vehicle-form__button_tag")]';
  }

  getURL() {
    return siteUrls.AB_URL;
  }
}

export default AbPage;
