const SiteUrls = require('../../config/site-urls');

class CartPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Заголовок раздела Корзина': CartPage.headerCartSection,
      'Текст Названия товара': CartPage.textProductName,
    };
  }

  static get headerCartSection() {
    return '//div[contains(text(), "Корзина")]';
  }

  static get textProductName() {
    return '//div[@class="cart-form__offers"]//a[contains(@class,"cart-form__link_base-alter")]';
  }

  static getURL() {
    return SiteUrls.CART;
  }
}

module.exports = CartPage;
