import {test,expect} from "@playwright/test"
test('handle pages',async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://www.amazon.in/s?k=phone&crid=1RLZG68HXH21L&sprefix=phone%2Caps%2C296&ref=nb_sb_noss_2")
    let p1=await page.url()
    console.log(p1);
    const product=await page.locator("//div[@class='a-section aok-relative s-image-fixed-height']//img[@alt='Sponsored Ad - iPhone 16e 128 GB: Built for Apple Intelligence, A18 Chip, Supersized Battery Life, 48MP Fusion. Camera, 1...']")
    let [newPage]=await Promise.all([context.waitForEvent('page'),
        product.click()
    ])
    console.log(`URL:${await newPage.url()}`);
    
})