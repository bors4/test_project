const SiteUrls = require('../../../../config/site-urls');

class CatalogMobileCat {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Заголовок раздела Мобильные телефоны': CatalogMobileCat.headerMobilePhonesSection,
      'Кнопка предложения': CatalogMobileCat.buttonOffer,
      'Текст Названия товара': CatalogMobileCat.textProductName,
    };
  }

  static get headerMobilePhonesSection() {
    return '//h1[contains(text(),"Мобильные телефоны")]';
  }

  static get buttonOffer() {
    return '//a[contains(text(),"предложени")]';
  }

  static get textProductName() {
    return '//a[contains(@class,"catalog-form__link_font-weight_semibold")]';
  }

  static getURL() {
    return SiteUrls.CATALOG_MOBILE;
  }
}

module.exports = CatalogMobileCat;
