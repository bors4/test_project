const SiteUrls = require('../../config/site.urls');

class MoneyPage {
	constructor() {
		this.elements = {
			'таб навигации Кошелек': '//a/span[.="Кошелек"]',
		};
	}

	getURL() {
		return SiteUrls.MONEY;
	}
}

module.exports = MoneyPage;
