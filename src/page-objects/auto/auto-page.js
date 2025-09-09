const SiteUrls = require('../../config/site-urls');

class AutoPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Таб навигации Авто': this.tabAutoNavigation,
    };
  }

  get tabAutoNavigation() {
    return '//a/span[.="Авто"]';
  }

  getURL() {
    return SiteUrls.AUTO;
  }
}

module.exports = AutoPage;
