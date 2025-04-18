import {test,expect} from "@playwright/test"
test('add product to the cart in flipkart',async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage()
    await page.goto("https://www.flipkart.com/")
    await page.locator("//input[@name='q']").fill("phone");
    await page.keyboard.press("Enter")
    const product=await page.locator("//div[text()='vivo T4x 5G (Marine Blue, 128 GB)']")
    let [newPage]=await Promise.all([context.waitForEvent('page'),product.click()])
    const p1=await newPage.locator("//label[text()='Compare']")
    await p1.click()
    await page.pause()
})


