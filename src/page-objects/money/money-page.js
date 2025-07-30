const SiteUrls = require('../../config/site-urls');

class MoneyPage {
	constructor() {
		this.elements = {
			'Таб навигации Кошелек': this.tabWallet,
		};
	}

	get tabWallet() {
		return '//a/span[.="Кошелек"]';
	}

	getURL() {
		return SiteUrls.MONEY;
	}
}

module.exports = MoneyPage;
