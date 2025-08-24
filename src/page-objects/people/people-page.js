const SiteUrls = require('../../config/site-urls');

class PeoplePage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Таб навигации Люди': PeoplePage.tabPeople,
    };
  }

  static get tabPeople() {
    return '//a/span/span[.="Люди"]/parent::span/parent::a';
  }

  static getURL() {
    return SiteUrls.PEOPLE;
  }
}

module.exports = PeoplePage;
