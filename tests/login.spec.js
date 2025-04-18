import {test,expect} from "@playwright/test"
import login from "../pageObject/login.js"
test("Login to the application",async({page})=>{
    let Login=new login(page)
    await Login.url()
    await Login.login()
})