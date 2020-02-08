const timeout = 200000;

describe("Probar punto 3 con Puppeteer", () => {

    beforeAll(async () => {

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        await page.goto(URL);

    });

    test("Titulo de la pagina", async () => {

        const title = await page.title();
        expect(title).toBe("Angular 6 User Registration and Login Example");

    }, timeout);

    test("Campos vacios", async () => {

        await page.click('button[class="btn btn-primary"]');
        expect(await page.$$eval('div[class="invalid-feedback"]', nodes => nodes.map(n => n.innerText))).toEqual(['First Name is required', 'Last Name is required', 'Username is required', 'Password is required']);

    }, timeout);

    test("Registro exitoso", async () => {

        var elementHandle = await page.$('input[formcontrolname=firstName]');
        await elementHandle.type('Nicolas', { delay: 10 });
        elementHandle = await page.$('input[formcontrolname=lastName]');
        await elementHandle.type('Lema', { delay: 10 });
        elementHandle = await page.$('input[formcontrolname=username]');
        await elementHandle.type('n.lema', { delay: 10 });
        elementHandle = await page.$('input[formcontrolname=password]');
        await elementHandle.type('PasswordSecreto', { delay: 10 });
        await elementHandle.press('Enter');

        await page.evaluate(async () => {
            await new Promise(function (resolve) {
                setTimeout(resolve, 1000)
            });
        });

        expect(await page.$eval('div[class="alert alert-success"]', e => e.textContent)).toEqual('Registration successful')


    }, timeout);


});
