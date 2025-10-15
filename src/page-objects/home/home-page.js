import * as SiteUrls from '../../config/site-urls.js';

class HomePage {
  constructor() {
    this.elements = {
      'Лого сайта': this.siteLogo,
      'Раздел Каталог': this.sectionCatalog,
      'Раздел Люди': this.sectionPeople,
      'Раздел Кошелек': this.sectionWallet,
      'Раздел Авто': this.sectionAuto,
      'Раздел Технологии': this.sectionTech,
      'Раздел Недвижимость': this.sectionRealty,
      'Раздел Форум': this.sectionForum,
      'Ссылка Мобильные телефоны': this.linkMobilePhones,
      'Модальное окно авторизации': this.modalAuth,
    };
  }

  get siteLogo() {
    return `//div//a[@href="${SiteUrls.HOME_URL}"]/img`;
  }

  get sectionCatalog() {
    return '//header/h2/a[contains(text(), "Каталог")]';
  }

  get sectionPeople() {
    return '//header/h2/a[contains(text(), "Люди")]';
  }

  get sectionWallet() {
    return '//header/h2/a[contains(text(), "Кошелек")]';
  }

  get sectionAuto() {
    return '//header/h2/a[contains(text(), "Авто")]';
  }

  get sectionTech() {
    return '//header/h2/a[contains(text(), "Технологии")]';
  }

  get sectionRealty() {
    return '//header/h2/a[contains(text(), "Недвижимость")]';
  }

  get sectionForum() {
    return '//header/h2/a[contains(text(), "Форум")]';
  }

  get linkMobilePhones() {
    return `//a[@href="${SiteUrls.CATALOG_MOBILE_URL}"]`;
  }

  get modalAuth() {
    return '//div[@id="auth-container"]';
  }

  getURL() {
    return SiteUrls.HOME_URL;
  }
}

export default HomePage;
