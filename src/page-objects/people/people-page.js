import * as SiteUrls from '../../config/site-urls.js';

class PeoplePage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Таб навигации Люди': this.tabPeople,
    };
  }

  get tabPeople() {
    return '//a/span/span[.="Люди"]/parent::span/parent::a';
  }

  getURL() {
    return SiteUrls.PEOPLE_URL;
  }
}

export default PeoplePage;
