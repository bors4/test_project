const BaseHeader = require('../BaseHeader')
const URLs = require('../../config/constants')

class HomePage extends BaseHeader {
    getURL() {
        return URLs.HOME;
    }

    constructor() {     
        super()   
    }

}

module.exports = HomePage;