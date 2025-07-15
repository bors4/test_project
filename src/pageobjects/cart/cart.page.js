const SiteUrls = require('../../config/site.urls');

class CartPage {
	constructor() {
		this.elements = {
			'заголовок раздела Корзина': '//div[contains(text(), "Корзина")]',
			'текст названия товара': '//div[@class="cart-form__offers"]//a[contains(@class,"cart-form__link_base-alter")]',
		};
	}

	getURL() {
		return SiteUrls.CART;
	}
}

module.exports = CartPage;
