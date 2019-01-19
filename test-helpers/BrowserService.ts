import * as puppeteer from 'puppeteer'

export default class BrowserService {

  public static async getInstance() {
    if (!this.instance) {
      this.instance = new BrowserService();
      await this.instance.initiate();
    }

    return this.instance;
  }
  private static instance: BrowserService | null;

  private baseUrl: string;
  private browser: any;

  private constructor() {
    this.baseUrl = 'http://localhost:8081/iframe.html';
  }

  public async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  public async getScreenshot(module: string, story: string) {
    const page = await this.openPage(module, story);

    const image = await page.screenshot();
    await page.close();

    return image;
  }

  public async openPage(module: string, story: string) {
    const page = await this.browser.newPage();
    await page.goto(this.getUrl(module, story), { waitUntil: 'networkidle2' });

    return page;
  }

  private getUrl(module: string, story: string): string {
    const selectedKind = encodeURIComponent(module);
    const selectedStory = encodeURIComponent(story);

    return `${this.baseUrl}?selectedKind=${selectedKind}&selectedStory=${selectedStory}`;
  }

  private async initiate() {
    this.browser = await puppeteer.launch();
  }
}