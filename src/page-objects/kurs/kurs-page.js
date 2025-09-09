const SiteUrls = require('../../config/site-urls');

class KursPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Заголовок раздела Лучшие курсы валют': this.headerBestRates,
    };
  }

  get headerBestRates() {
    return '//h1[text()="Лучшие курсы валют"]';
  }

  getURL() {
    return SiteUrls.KURS;
  }
}

module.exports = KursPage;
