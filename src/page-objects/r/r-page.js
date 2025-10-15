import * as SiteUrls from '../../config/site-urls.js';

class RPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Блок Карта недвижимости': this.blockRealtyMap,
      'Блок Список квартир': this.blockApartmentsList,
    };
  }

  get blockRealtyMap() {
    return '//div[@id="map"]';
  }

  get blockApartmentsList() {
    return '//div[@id="search-filter-results"]';
  }

  getURL() {
    return SiteUrls.R_URL;
  }
}

export default RPage;
