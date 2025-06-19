class RPage {
	constructor() {
		this.elements = {
			"карта недвижимости": '//div[@id="map"]',
			"список квартир": '//div[@id="search-filter-results"]'
		};
	}
}

module.exports = RPage;
