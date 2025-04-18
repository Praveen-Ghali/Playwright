
import {test} from '@playwright/test'
test("ghj",async({page})=>{
    await page.goto('http://106.51.82.61:9007/index.php?admin/doctor')
    await page.locator('//button[@class="btn btn-primary pull-right"]').click()
    let f=await page.frameLocator('//iframe').locator('//iframe[@class="wysihtml5-sandbox"]')
    f.fill("ghjk")
    // await page.locator('//iframe[@class="wysihtml5-sandbox"]').click()
})