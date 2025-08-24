const SiteUrls = require('../../config/site-urls');

class CatalogPricesPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Кнопка В корзину': CatalogPricesPage.buttonInCart,
      'Боковая панель с рекомендациями': CatalogPricesPage.sideBarRecommendation,
      'Кнопка боковой панели Перейти в корзину': CatalogPricesPage.buttonInCartSideBar,
      'Заголовок боковой панели с рекомендациями': CatalogPricesPage.headerRecommendationSideBar,
    };
  }

  static get buttonInCart() {
    return '(//a[contains(text(),"В корзину")])[2]';
  }

  static get sideBarRecommendation() {
    return '//div[@class="product-recommended__sidebar-body"]';
  }

  static get buttonInCartSideBar() {
    return `//div[@class="product-recommended__sidebar"]//a[@href="${SiteUrls.CART}"]`;
  }

  static get headerRecommendationSideBar() {
    return '//div[@class="product-recommended__subheader"][1]';
  }
}

module.exports = CatalogPricesPage;
