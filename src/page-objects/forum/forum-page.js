const SiteUrls = require('../../config/site-urls');

class ForumPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Заголовок раздела Форум': this.headerForumSection,
    };
  }

  get headerForumSection() {
    return '//h1[contains(text(), "Форум")]';
  }

  getURL() {
    return SiteUrls.FORUM;
  }
}

module.exports = ForumPage;
