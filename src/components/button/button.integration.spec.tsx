import BrowserService from '../../../test-helpers/BrowserService'

test('Button rendered with correct styles', async () => {
  expect.assertions(2)
  const browserService = await BrowserService.getInstance()
  const image = await browserService.getScreenshot('Button', 'with text')

  expect(image).toBeDefined()
  expect(image).toMatchImageSnapshot()
})
