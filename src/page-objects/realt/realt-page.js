const SiteUrls = require('../../config/site-urls');

class RealtPage {
	constructor() {
		this.elements = {
			'Таб навигации Недвижимость': this.tabRealtyNavigation,
		};
	}

	get tabRealtyNavigation() {
		return '//a/span[.="Недвижимость"]';
	}

	getURL() {
		return SiteUrls.REALT;
	}
}

module.exports = RealtPage;
