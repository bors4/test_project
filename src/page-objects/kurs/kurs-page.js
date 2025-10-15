import * as SiteUrls from '../../config/site-urls.js';

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
    return SiteUrls.KURS_URL;
  }
}

export default KursPage;
