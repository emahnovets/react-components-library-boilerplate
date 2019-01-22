import { configureToMatchImageSnapshot } from 'jest-image-snapshot'
import BrowserService from '../test-helpers/BrowserService';

expect.extend({ toMatchImageSnapshot: configureToMatchImageSnapshot({
  failureThreshold: 0.005,
  failureThresholdType: 'percent',
}) });

afterAll(async () => {
  const browserService = await BrowserService.getInstance();
  await browserService.closeBrowser();
});