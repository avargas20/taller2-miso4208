const timeout = 200000;

beforeAll(async () => {
    await page.goto(URL, { waitUntil: "domcontentloaded" });
});

describe("Probar punto 3 con Puppeteer", () => {
    test("Titulo de la pagina", async () => {

        const title = await page.title();

        expect(title).toBe("");
    }, timeout);

});
