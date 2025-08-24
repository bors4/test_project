const SiteUrls = require('../../config/site-urls');

class RPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Блок Карта недвижимости': RPage.blockRealtyMap,
      'Блок Список квартир': RPage.blockApartmentsList,
    };
  }

  static get blockRealtyMap() {
    return '//div[@id="map"]';
  }

  static get blockApartmentsList() {
    return '//div[@id="search-filter-results"]';
  }

  static getURL() {
    return SiteUrls.R;
  }
}

module.exports = RPage;
