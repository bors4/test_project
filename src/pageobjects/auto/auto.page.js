const SiteUrls = require('../../config/site.urls');

class AutoPage {
	constructor() {
		this.elements = {
			'таб навигации Авто': '//a/span[.="Авто"]',
		};
	}

	getURL() {
		return SiteUrls.AUTO;
	}
}

module.exports = AutoPage;
