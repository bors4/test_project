import siteUrls from '../../config/site-urls.js';

class RPage {
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
    return siteUrls.R_URL;
  }
}

export default RPage;
