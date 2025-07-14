const SiteUrls = require('../../config/site.urls');

class CartPage {
	constructor() {
		this.elements = {
			'заголовок раздела Корзина': '//div[contains(text(), "Корзина")]',
		};
	}

	getURL() {
		return SiteUrls.CART;
	}
}

module.exports = CartPage;
