const SiteUrls = require("../../config/site.urls");

class PeoplePage {
	constructor() {
		this.elements = {
			"таб навигации Люди": '//a/span/span[.="Люди"]/parent::span/parent::a'
		};
	}

	getURL() {
		return SiteUrls.PEOPLE;
	}
}

module.exports = PeoplePage;
