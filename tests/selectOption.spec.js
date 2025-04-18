import {test} from "@playwright/test"
test("To print text in the optin",async({page})=>{
await page.goto("file:///C:/Users/Praveen%20M%20Ghali/OneDrive/Desktop/select.html")
await page.locator("//select").click()
let a=await page.locator("//select/option[1]").nth(1).textContent()
console.log(a);
await page.pause()
})