import siteUrls from '../../config/site-urls.js';

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
      'Ссылка Автобарахолка (новости)': this.linkAbNewsSection,
      'Блок Автобарахолка': this.blockAb,
      'Селект Марка автомобиля': this.selectCarBrand,
      'Селект Модель автомобиля': this.selectCarModel,
      'Селект Цена автомобиля': this.selectCarPrice,
      'Кнопка Найти': this.buttonSearch,
      Футер: this.footer,
      'Ссылка О компании': this.linkAbout,
    };
  }

  get siteLogo() {
    return `//div//a[@href="${siteUrls.HOME_URL}"]/img`;
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
    return `//a[@href="${siteUrls.CATALOG_MOBILE_URL}"]`;
  }

  //a[@href="https://catalog.onliner.aby/mobile"]

  get modalAuth() {
    return '//div[@id="auth-container"]';
  }

  get linkAbNewsSection() {
    return '//*[@class="b-ab-layer"]//a[text()="Автобарахолка"]';
  }

  get blockAb() {
    return "//div[contains(@class, 'b-main-page-ab-layer')]";
  }

  get selectCarBrand() {
    return '//span[@id="car-1"]/select';
  }

  get selectCarModel() {
    return '//span[@id="car-2"]/select';
  }

  get selectCarPrice() {
    return '//span[@id="car-3"]/select';
  }

  get buttonSearch() {
    return "//a[text()='Найти']";
  }

  get footer() {
    return '//footer';
  }

  get linkAbout() {
    return '//footer//a[contains(text(), "О компании")]';
  }

  getURL() {
    return siteUrls.HOME_URL;
  }
}

export default HomePage;
