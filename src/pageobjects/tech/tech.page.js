const SiteUrls = require('../../config/site.urls');

class TechPage {
	constructor() {
		this.elements = {
			'таб навигации Технологии': '//a/span[.="Технологии"]',
		};
	}

	getURL() {
		return SiteUrls.TECH;
	}
}

module.exports = TechPage;
