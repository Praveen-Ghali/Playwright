import {test} from "@playwright/test"
test("Launch browser",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("//input[@id='name']").fill("Praveen")
    await page.keyboard.press("Control+a")
    await page.keyboard.press("Control+c")
    await page.keyboard.down("Tab")
   // await page.keyboard.press("Tab")
    await page.keyboard.press("Control+v")
    await page.pause()
    })