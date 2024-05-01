# playwright-duration

Micro lib to allow fine grained control of reported test time on tests.  
Useful when measuring performance for single user workflow tests.

# Installation
``` sh
npm install --save-dev playwright-duration
```

# Usage
given a playwright test, import and wrap the `duration` function around the code under test you'd like to time  

Example:
``` ts
import { test, expect } from '@playwright/test';
import { duration } from 'playwright-duration';

test('get started link', async ({ page }, testInfo) => {
  //test setup
  await page.goto('https://playwright.dev/');

  //after main page load, would like to measure the time to load the `Get started` link
  await duration(testInfo, async () => {
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});
```

