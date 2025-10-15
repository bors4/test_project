import * as SiteUrls from '../../config/site-urls.js';

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
    return SiteUrls.FORUM_URL;
  }
}

export default ForumPage;
