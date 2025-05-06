import { test } from '@playwright/test'

test('test browser', async ({ page }) => {
  // point this to wherever you want
  await page.goto('http://starcity.test:90/o-nas/')

  // keep browser open
  await page.pause()
})
