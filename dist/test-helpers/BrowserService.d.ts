export default class BrowserService {
    static getInstance(): Promise<BrowserService>;
    private static instance;
    private baseUrl;
    private browser;
    private constructor();
    closeBrowser(): Promise<void>;
    getScreenshot(module: string, story: string): Promise<any>;
    openPage(module: string, story: string): Promise<any>;
    private getUrl;
    private initiate;
}
