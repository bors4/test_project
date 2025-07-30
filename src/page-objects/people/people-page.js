const SiteUrls = require('../../config/site-urls');

class PeoplePage {
	constructor() {
		this.elements = {
			'Таб навигации Люди': this.tabPeople,
		};
	}

	get tabPeople() {
		return '//a/span/span[.="Люди"]/parent::span/parent::a';
	}

	getURL() {
		return SiteUrls.PEOPLE;
	}
}

module.exports = PeoplePage;
