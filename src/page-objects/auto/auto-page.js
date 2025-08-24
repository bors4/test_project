const SiteUrls = require('../../config/site-urls');

class AutoPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Таб навигации Авто': AutoPage.tabAutoNavigation,
    };
  }

  static get tabAutoNavigation() {
    return '//a/span[.="Авто"]';
  }

  static getURL() {
    return SiteUrls.AUTO;
  }
}

module.exports = AutoPage;
