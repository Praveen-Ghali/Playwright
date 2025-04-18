import {test,expect} from "@playwright/test"
test('hadling nested iframe',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/frames/nested?sublist=1")
    const frame1=await page.frameLocator("//iframe[@class='w-full h-96']")
    const mail=await frame1.locator("//p[text()='Admin@gmail.com']").textContent()
    const pwd=await frame1.locator("(//p[text()='Admin@1234'])[1]").textContent()
    console.log(mail);
    console.log(pwd);
    
    const frame2=await frame1.frameLocator("(//div[@class='form_container'])[2]/iframe")
    await frame2.locator("#email").fill(mail)
    await frame2.locator("#password").fill(pwd)
    await frame2.locator("#confirm-password").fill(pwd)
    await frame2.locator("//button[@id='submitButton']").click()
    const v1=await page.locator("//div[text()='Sign up successful!']")
    await expect(v1).toBeVisible()
    

    
})