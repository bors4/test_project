import siteUrls from '../../../../config/site-urls.js';

class CatalogMobileCat {
  constructor() {
    this.elements = {
      'Заголовок раздела Мобильные телефоны': this.headerMobilePhonesSection,
      'Кнопка предложения': this.buttonOffer,
      'Текст Названия товара': this.textProductName,
    };
  }

  get headerMobilePhonesSection() {
    return '//h1[contains(text(),"Мобильные телефоны")]';
  }

  get buttonOffer() {
    return '//a[contains(text(),"предложени")]';
  }

  get textProductName() {
    return '//a[contains(@class,"catalog-form__link_font-weight_semibold")]';
  }

  getURL() {
    return siteUrls.CATALOG_MOBILE_URL;
  }
}

export default CatalogMobileCat;
