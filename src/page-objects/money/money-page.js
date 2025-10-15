import * as SiteUrls from '../../config/site-urls.js';

class MoneyPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Таб навигации Кошелек': this.tabWallet,
    };
  }

  get tabWallet() {
    return '//a/span[.="Кошелек"]';
  }

  getURL() {
    return SiteUrls.MONEY_URL;
  }
}

export default MoneyPage;
