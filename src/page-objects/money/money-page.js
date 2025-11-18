import siteUrls from '../../config/site-urls.js';

class MoneyPage {
  constructor() {
    this.elements = {
      'Таб навигации Кошелек': this.tabWallet,
    };
  }

  get tabWallet() {
    return '//a/span[.="Кошелек"]';
  }

  getURL() {
    return siteUrls.MONEY_URL;
  }
}

export default MoneyPage;
