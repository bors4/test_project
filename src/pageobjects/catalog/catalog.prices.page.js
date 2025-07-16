const SiteUrls = require('../../config/site.urls');
class CatalogPricesPage {
	constructor() {
		this.elements = {
			'кнопка В корзину': '//div[contains(@class,"offers-list__part_action")]//a[contains(text(),"В корзин")]',
			'боковая панель с рекомендациями': '//div[@class="product-recommended__sidebar-body"]',
			'кнопка боковой панели Перейти в корзину': `//div[@class="product-recommended__sidebar"]//a[@href="${SiteUrls.CART}"]`,
			'заголовок боковой панели с рекомендациями': '//div[@class="product-recommended__subheader"][1]',
		};
	}
}

module.exports = CatalogPricesPage;
