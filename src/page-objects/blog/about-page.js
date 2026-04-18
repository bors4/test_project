class AboutPage {
  constructor() {
    this.elements = {
      'Заголовок страницы': this.pageTitle,
    };
  }

  get pageTitle() {
    return '//div[@class="news-wrapper"]//h1';
  }

  get siteLogo() {
    return '//img[contains(@class, "b-ml-logo") or contains(@alt, "Onliner")]';
  }

  get url() {
    return 'https://blog.onliner.by/about';
  }

  getURL() {
    return this.url;
  }
}

export default AboutPage;
