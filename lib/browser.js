const { Builder, By } = require('selenium-webdriver');
const { setBrowserDriver } = require('./share')

class Browser {
    constructor() {

    }

    async init() {
        this.driver = await new Builder()
            .usingServer('http://localhost:4444/wd/hub')
            .forBrowser('chrome')
            .build();

        setBrowserDriver(this.driver)
    }

    async get(url) {
        if (this.driver) {
            await this.driver.get(url)
        } else {
            await this.init()
            await this.driver.get(url)
        }
    }

    async wait(...args) {
        if (this.driver) {
            await this.driver.wait(...args)
        } else {
            await this.init()
            await this.driver.wait(...args)
        }
    }

    async close() {
        await this.driver.quit()
    }
    async clickButtonCss(...args) {
        return this.driver.findElement(By.css(...args)).click()
    }
}


module.exports = {
    Browser
}