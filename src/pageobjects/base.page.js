class BasePage {
    async open(path) {
        await browser.url(path);
    }

    constructor () {
        this.buttonAcceptCookie = '//a[@id="submit-button"]'
    }

    async acceptCookie (){
        $(this.buttonAcceptCookie).click()
    }
}

module.exports = BasePage