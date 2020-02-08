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

    test("Clic al boton", async () => {

        await page.click('button[class="btn btn-primary"]');
        await delay(2000)

    }, timeout);


});
