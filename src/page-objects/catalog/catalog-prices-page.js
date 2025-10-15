import * as SiteUrls from '../../config/site-urls.js';

class CatalogPricesPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Кнопка Купить': this.buttonOffer,
      'Кнопка В корзине': this.buttonInCart,
    };
  }

  get buttonOffer() {
    return '(//a[contains(text(),"Купить")])[2]';
  }

  get buttonInCart() {
    return '(//a[contains(text(),"В корзине")])[2]';
  }
}

export default CatalogPricesPage;
