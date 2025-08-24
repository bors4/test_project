const SiteUrls = require('../../config/site-urls');

class MoneyPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Таб навигации Кошелек': MoneyPage.tabWallet,
    };
  }

  static get tabWallet() {
    return '//a/span[.="Кошелек"]';
  }

  static getURL() {
    return SiteUrls.MONEY;
  }
}

module.exports = MoneyPage;
