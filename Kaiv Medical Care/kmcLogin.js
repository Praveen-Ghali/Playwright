import seletData from "./excelData";
class login{
    constructor(page){
        this.page=page;
        this.un=page.locator("//input[@id='email']")
        this.pwd=page.locator("//input[@id='password']")
        this.lgBtn=page.locator("//button[@class='btn btn-primary btn-block btn-login']")

    }
    async url(){
        await this.page.goto("http://106.51.82.61:9007/")
    }
    async kmcAdminLogin(un,pwd){
        await this.un.fill(un)
        await this.pwd.fill(pwd)
        await this.lgBtn.click()
    }
    async kmcDoctorLogin(un,pwd){
        await this.un.fill(un)
        await this.pwd.fill(pwd)
        await this.lgBtn.click()
    }
    async kmcNurseLogin(un,pwd){
        await this.un.fill(un)
        await this.pwd.fill(pwd)
        await this.lgBtn.click()
    }
    async kmcPatientLogin(un,pwd){
        await this.un.fill(un)
        await this.pwd.fill(pwd)
        await this.lgBtn.click()
        //await this.page.waitTimeout(2000)
    }
   
}

export default login