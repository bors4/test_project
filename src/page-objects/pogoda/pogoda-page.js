import * as SiteUrls from '../../config/site-urls.js';

class PogodaPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Заголовок раздела Сейчас в': this.headerCurrentWeatherSection,
      'Дропдаун списка городов': this.dropdownCities,
      'Список городов': this.listCities,
      'Город Киев': this.listItemKyiv,
    };
  }

  get headerCurrentWeatherSection() {
    return '//p[contains(text(), "Сейчас в")]';
  }

  get dropdownCities() {
    return '//p[contains(text(), "Сейчас в")]/a';
  }

  get listCities() {
    return '//div[@class="b-weather-today__city-i"]/div';
  }

  get listItemKyiv() {
    return '//div/ul/li/a[contains(text(),"Киев")]';
  }

  getURL() {
    return SiteUrls.POGODA_URL;
  }
}

export default PogodaPage;
