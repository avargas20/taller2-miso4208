const timeout = 200000;

beforeAll(async () => {
    await page.goto(URL);
});

describe("Probar punto 3 con Puppeteer", () => {
    test("Titulo de la pagina", async () => {

        const title = await page.title();

        expect(title).toBe("angular-6-registration-login-example.stackblitz.io");
    }, timeout);

    test("Clic al boton", async () => {

        await page.focus('input[formcontrolname=username]');
        await page.keyboard.type('testing');
        await expect(page).toClick('button', { text: 'Register' })
    }, timeout);


});
