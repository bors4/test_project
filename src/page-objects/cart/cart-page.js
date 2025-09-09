const SiteUrls = require('../../config/site-urls');

class CartPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Заголовок раздела Корзина': this.headerCartSection,
      'Текст Названия товара': this.textProductName,
    };
  }

  get headerCartSection() {
    return '//div[contains(text(), "Корзина")]';
  }

  get textProductName() {
    return '//div[@class="cart-form__offers"]//a[contains(@class,"cart-form__link_base-alter")]';
  }

  getURL() {
    return SiteUrls.CART;
  }
}

module.exports = CartPage;
