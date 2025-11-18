import siteUrls from '../../config/site-urls.js';
import BasePage from '../header/base-header.js';

class CatalogPage extends BasePage {
  constructor() {
    super();

    this.elements = {
      'Заголовок раздела Каталог': this.headerCatalogSection,
      'Заголовок раздела Популярные категории': this.headerPopularCategorySection,
    };
  }

  get headerCatalogSection() {
    return '//h1[contains(text(), "Каталог")]';
  }

  get headerPopularCategorySection() {
    return '//h2[contains(text(), "Популярные категории")]';
  }

  getURL() {
    return siteUrls.CATALOG_URL;
  }
}

export default CatalogPage;
