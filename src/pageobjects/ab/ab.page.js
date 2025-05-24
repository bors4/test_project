const BaseHeader = require('../BaseHeader')

class AbPage {

    constructor (){
        this.elements = {
            'Автобарахолка': '//h1[contains(text(), "Автобарахолка")]'
        }
    }
}

module.exports = AbPage