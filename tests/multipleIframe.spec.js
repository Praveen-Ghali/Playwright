import {test,expect} from "@playwright/test"
test("handle multiple frame",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/frames/multiple?sublist=2")
    const email1=await page.locator("//p[text()='Email:Admin@gmail.com']").textContent()
    const pwd1=await page.locator("//p[text()='Password : Admin@1234']").textContent()
    const cPwd=await page.locator("//p[text()='Confirm Password : Admin@1234']").textContent()
    console.log(email1);
    console.log(pwd1);
    console.log(cPwd);
    const email2=await page.locator("//p[text()='Email:SuperAdmin@gmail.com']").textContent()
    const pwd2=await page.locator("//p[text()='Email:SuperAdmin@gmail.com']").textContent()
    
    const frame1=await page.frameLocator("(//iframe)[1]")
    await frame1.locator("#email").fill(email1)
    await frame1.locator("#password").fill(pwd1)
    await frame1.locator("#confirm-password").fill(cPwd)
    await frame1.locator("//button[text()='Sign Up']").click()
    const v1=await page.locator("//div[text()='Sign up successful!']")
    await expect.soft(v1).toBeVisible()

    const frame2=await page.frameLocator("(//iframe)[2]")
    await frame2.locator("#username").fill(email2)
    await frame2.locator("#password").fill(pwd2)


})