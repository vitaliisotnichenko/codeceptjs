const { Helper } = codeceptjs;

class FillFieldWithDelay extends Helper {

  async fillFieldWithTimeout(locator, value) {
    const { page } = this.helpers.Puppeteer;
    await page.type(locator, value, {delay: 500});
}

}

module.exports = FillFieldWithDelay;
