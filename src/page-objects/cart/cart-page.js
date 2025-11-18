import siteUrls from '../../config/site-urls.js';

class CartPage {
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
    return siteUrls.CART_URL;
  }
}

export default CartPage;
