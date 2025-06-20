class PogodaPage {
    constructor() {
        this.elements = {
           "Сейчас в" : '//p[contains(text(), "Сейчас в")]'
        }
    }
}

module.exports = PogodaPage;