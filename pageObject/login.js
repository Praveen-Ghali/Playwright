class login{
    constructor(page){
        this.page=page
        this.usn=page.locator("//input[@id='username']")
        this.pwd=page.locator("//input[@id='password']")
        this.btn=page.locator("//button[@id='submit']")
    }
    async url(){
        await this.page.goto("https://practicetestautomation.com/practice-test-login/")
    }
    async login(){
        await this.usn.fill("student")
        await this.pwd.fill("Password123")
        await this.btn.click()
    }
}
export default login