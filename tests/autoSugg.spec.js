import {test} from "@playwright/test"
test("To print all auto suggestion of iphone",async({page})=>{
await page.goto("https://www.flipkart.com/")
await page.locator("//input[@name='q']").fill("iphone")
await page.waitForSelector("//form//ul/li");
const listItems = await page.$$("//form//ul/li");
for (const item of listItems) {
    const text = await item.textContent();
    console.log(text);
    //console.log(text.trim());
  }
});
//await page.pause()

test("javascript autosuggestion",async({page})=>{
  await page.goto("https://www.google.com/");
  await page.locator("#APjFqb").fill("javascript");
  await page.waitForSelector("(//div[@class='OBMEnb'])[1]/ul/li//span");
  const sugg=await page.$$("(//div[@class='OBMEnb'])[1]/ul/li//span");
  for(const item of sugg){
    const text=await item.textContent();
    console.log(text);
   //
   //  await page.pause();
    
  }
})
//await page.pause();