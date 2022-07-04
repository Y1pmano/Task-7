const { Browser, $, until, By, Key } = require('../lib')
const assert = require('assert');

describe('Test that checks if aimprosoft.com main page can be opened', function () {

    const searchGoogleField = $(By.css('body')).$(By.name('q'))
    const browser = new Browser();


    it('TEST', async function () {

        await browser.get('http://www.google.com/ncr');
        await searchGoogleField.sendKeys('aimprosoft', Key.RETURN);
        await browser.wait(until.titleIs('aimprosoft - Пошук Google'), 10000);
        await browser.clickButtonCss('a[href="https://www.aimprosoft.com/"]');



        assert.equal('Enterprise Software Development Services Company - Aimprosoft', 'Enterprise Software Development Services Company - Aimprosoft')
        await browser.close()

    })
})