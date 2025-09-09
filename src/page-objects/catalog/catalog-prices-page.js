const SiteUrls = require('../../config/site-urls');

class CatalogPricesPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Кнопка В корзину': this.buttonInCart,
      'Боковая панель с рекомендациями': this.sideBarRecommendation,
      'Кнопка боковой панели Перейти в корзину': this.buttonInCartSideBar,
      'Заголовок боковой панели с рекомендациями': this.headerRecommendationSideBar,
    };
  }

  get buttonInCart() {
    return '(//a[contains(text(),"В корзину")])[2]';
  }

  get sideBarRecommendation() {
    return '//div[@class="product-recommended__sidebar-body"]';
  }

  get buttonInCartSideBar() {
    return `//div[@class="product-recommended__sidebar"]//a[@href="${SiteUrls.CART}"]`;
  }

  get headerRecommendationSideBar() {
    return '//div[@class="product-recommended__subheader"][1]';
  }
}

module.exports = CatalogPricesPage;
