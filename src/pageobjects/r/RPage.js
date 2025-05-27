class RPage {
    constructor() {
        this.elements = {
            'карта недвижемости': '//div[@id="map"]',
            'список квартир': '//div[@id="search-filter-results"]'
        }
    }
}

module.exports = RPage