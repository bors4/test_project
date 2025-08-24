const SiteUrls = require('../../config/site-urls');

class KursPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Заголовок раздела Лучшие курсы валют': KursPage.headerBestRates,
    };
  }

  static get headerBestRates() {
    return '//h1[text()="Лучшие курсы валют"]';
  }

  static getURL() {
    return SiteUrls.KURS;
  }
}

module.exports = KursPage;
