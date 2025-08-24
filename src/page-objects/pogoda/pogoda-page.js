const SiteUrls = require('../../config/site-urls');

class PogodaPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Заголовок раздела Сейчас в': PogodaPage.headerCurrentWeatherSection,
      'Дропдаун списка городов': PogodaPage.dropdownCities,
      'Список городов': PogodaPage.listCities,
      'Город Киев': PogodaPage.listItemKyiv,
    };
  }

  static get headerCurrentWeatherSection() {
    return '//p[contains(text(), "Сейчас в")]';
  }

  static get dropdownCities() {
    return '//p[contains(text(), "Сейчас в")]/a';
  }

  static get listCities() {
    return '//div[@class="b-weather-today__city-i"]/div';
  }

  static get listItemKyiv() {
    return '//div/ul/li/a[contains(text(),"Киев")]';
  }

  static getURL() {
    return SiteUrls.POGODA;
  }
}

module.exports = PogodaPage;
