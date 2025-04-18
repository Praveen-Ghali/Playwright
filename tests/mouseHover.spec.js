//WAS TO HOVER ON MEN SECTION OF DEMOQSPIDER AND PRINT ALL LIST OF OPTIONS IN THE MEN SECTION
import {test} from "@playwright/test"
test("To print all options in the men section",async({page})=>{
await page.goto("https://demoapps.qspiders.com/")
await page.locator("//p[text()='UI Testing Concepts']").click()
await page.locator("//section[text()='Mouse Actions']").click()
await page.locator("//section[text()='Mouse Hover']").click()
await page.locator("//a[text()='Tab']").click()
await page.locator("//li[text()='Men ']").hover()
await page.waitForSelector('ul li');
const listItems = await page.$$("//section[@class='Men_List']/ul/li");
for (const item of listItems) {
    const text = await item.textContent();
    console.log(text.trim());
  }
});


// import { test } from "@playwright/test";

// test("To place order for shoes", async ({ page }) => {
//   await page.goto("https://demoapps.qspiders.com/");

//   await page.locator('xpath=//p[text()="UI Testing Concepts"]').click();
//   await page.locator('xpath=//section[text()="Mouse Actions"]').click();
//   await page.locator('xpath=//section[text()="Mouse Hover"]').click();
//   await page.locator('xpath=//a[text()="Tab"]').click();

//   await page.locator('xpath=//li[text()="Men "]').hover();

//   // Wait for the sub-menu or list items to appear
//   await page.waitForSelector('ul li');

//   const listItems = await page.$$('ul li');
//   for (const item of listItems) {
//     const text = await item.textContent();
//     console.log(text.trim());
//   }

//   // Pause for debugging (must be inside the test)
//   await page.pause();
// });


