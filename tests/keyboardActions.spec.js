import {test} from "@playwright/test"
test("Launch browser",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("//input[@id='username']").click()
    //await page.keyboard.type("Student")
    // await page.keyboard.down("Shift")
    await page.keyboard.press("Shift+t")
    await page.keyboard.press("Shift+T")
    await page.keyboard.press("s")
    await page.keyboard.press("T")
    await page.keyboard.press("u")
    await page.keyboard.press("d")
    await page.keyboard.press("e")
    await page.keyboard.press("n")
    await page.keyboard.press("t")
    await page.keyboard.up("Shift")
    await page.keyboard.press("Backspace")
    await page.locator("//input[@id='password']").click()
    await page.keyboard.insertText("Password123")

    await page.pause()

})