const SiteUrls = require('../../config/site-urls');

class RealtPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Таб навигации Недвижимость': RealtPage.tabRealtyNavigation,
    };
  }

  static get tabRealtyNavigation() {
    return '//a/span[.="Недвижимость"]';
  }

  static getURL() {
    return SiteUrls.REALT;
  }
}

module.exports = RealtPage;
