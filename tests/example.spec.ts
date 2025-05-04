import page from '@/app/form/page';
import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

test.describe("HomePage", ()=>{
  test.beforeEach(async({page})=>{
   await page.goto("http://localhost:3001")
  })
  test("", async({page})=>{
    await expect(page).toHaveTitle("Home Page");
    await expect(page.getByRole("heading",{
      name:"Hi, I'm Nathnael"
    })).toBeVisible()
    await page.getByRole("button",{
      name:"Contact me"
    }).click()
  })
  
})
