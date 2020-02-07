module.exports = {
    preset: "jest-puppeteer",
    globals: {
        URL: "https://angular-6-registration-login-example.stackblitz.io/register"
    },
    testMatch: [
        "**/*.test.js"
    ],
    verbose: true
}