const SiteUrls = require('../../config/site.urls');

class RPage {
	constructor() {
		this.elements = {
			'карта недвижимости': '//div[@id="map"]',
			'список квартир': '//div[@id="search-filter-results"]',
		};
	}

	getURL() {
		return SiteUrls.R;
	}
}

module.exports = RPage;
