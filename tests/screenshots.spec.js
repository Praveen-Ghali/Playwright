import {test} from "@playwright/test"
test("Take screenshots",async({page})=>{
    const time=new Date().getTime();
    await page.goto("https://demoapps.qspiders.com/")
    await page.screenshot({path:`Screenshots/page-${time}.png`});
})