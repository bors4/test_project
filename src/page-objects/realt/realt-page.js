const SiteUrls = require('../../config/site-urls');

class RealtPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Таб навигации Недвижимость': this.tabRealtyNavigation,
    };
  }

  get tabRealtyNavigation() {
    return '//a/span[.="Недвижимость"]';
  }

  getURL() {
    return SiteUrls.REALT;
  }
}

module.exports = RealtPage;
