class Doctor{
    constructor(page){
        this.doctorTab=page.locator("//span[text()='Doctor']")
        this.addDoctorBtn=page.locator("//button[contains(text(),'Add Doctor')]")
        this.nameTxt=page.locator("//input[@name='name']")
        this.emailTxt=page.locator("//input[@name='email']")
        this.pwdTxt=page.locator("//input[@name='password']")
        this.addTxtArea=page.locator("//textarea[@name='address']")
        this.phoneTxt=page.locator("//input[@name='phone']")
        this.deptDD=page.locator("//select[@name='department_id']")
        this.submitBtn=page.locator("//input[@class='btn btn-success']")
        this.frame1=page.locator("//iframe").contentFrame().locator('body')
        //this.ff=page.locator("//iframe[@class='wysihtml5-sandbox']")
        
    }
    async doctor(name,email,pd,add,ph,opt,descp){
        await this.doctorTab.click()
        await this.addDoctorBtn.click()
        await this.nameTxt.fill(name)
        await this.emailTxt.fill(email)
        await this.pwdTxt.fill(pd)
        await this.addTxtArea.fill(add)
        await this.phoneTxt.fill(ph)
        await this.deptDD.selectOption(opt)
        await this.frame1.fill(descp)
        await this.submitBtn.click()
    }
}
export default Doctor