import puppeteer from 'puppeteer';

describe('pay system widget Form', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: 'new',
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Button should render on page start', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:9000');

    // await page.waitForSelector('body');
    await page.waitForSelector('.container');
  });

  test('Popover should render on button click', async () => {
    jest.setTimeout(40000);
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.button');

    const button = await page.$('.button');

    await button.click();

    await page.waitForSelector('.tooltip');
    await page.waitForSelector('.tooltip_title');
    await page.waitForSelector('.tooltip_content');
  }, 20000);

  afterEach(async () => {
    await browser.close();
  });
});
