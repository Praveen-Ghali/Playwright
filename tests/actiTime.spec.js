import {test} from "@playwright/test"
test("Launch browser",async({page})=>{
    await page.goto("http://localhost/login.do")
    await page.locator("//input[@id='username']").fill("admin")
    await page.locator("//input[@name='pwd']").fill("manager")
    await page.locator("//div[text()='Login ']").click()
    await page.locator("//div[text()='TASKS']").click()
    await page.locator("//div[text()='Add New']").click()
    await page.locator("//div[text()='+ New Customer']").click()
    //await page.getByPlaceholder("Enter Customer Name").fill('MAHABANK');
    await page.locator("//input[@id='customerLightBox_nameField']").fill("MAHABANK")
    await page.getByPlaceholder("Add Customer Description").fill("Basavanagudi")
    await page.locator("//button[@class='x-btn-text']").click()
    await page.locator("//ul[@class='x-menu-list']/li[5]").click()
    await page.locator("//span[text()='Create Customer']").click()
    console.log("Customer created successfully");
   
})