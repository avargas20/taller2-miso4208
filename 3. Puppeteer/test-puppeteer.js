const puppeteer = require('puppeteer');
const { expect }  = require('chai');

describe('Duck Duck Go search using basic Puppeteer', () => {

    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('https://angular-6-registration-login-example.stackblitz.io/register');
    });

    it('Abrir pagina', async () => {
        expect(await page.title()).to.eql('Angular 6 User Registration and Login Example');
    });

});