const SiteUrls = require('../../config/site.urls');

class RealtPage {
	constructor() {
		this.elements = {
			'таб навигации Недвижимость': '//a/span[.="Недвижимость"]',
		};
	}

	getURL() {
		return SiteUrls.REALT;
	}
}

module.exports = RealtPage;
