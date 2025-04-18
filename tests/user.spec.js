import {test} from "@playwright/test"
import user from "../pageObject/user.js"
test("Create new user",async({page})=>{
    let User=new user(page)
    await User.url()
    await User.userLogin()
    await User.createNewUser()
    //await page.pause()

})