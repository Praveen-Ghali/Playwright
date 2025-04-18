class user{
    constructor(page){
        this.page=page;
        this.un=page.locator("//input[@id='username']")
        this.pwd=page.locator("//input[@name='pwd']")
        this.btn=page.locator("//div[text()='Login ']")
        this.usersTab=page.locator("//div[text()='USERS']")
        this.addUserBtn=page.locator("//div[text()='Add User']")
        this.fName=page.locator("#userDataLightBox_firstNameField")
        this.lName=page.locator("#userDataLightBox_lastNameField")
        this.eMail=page.locator("#userDataLightBox_emailField")
        this.usn=page.locator("#userDataLightBox_usernameField")
        this.pwd1=page.locator("#userDataLightBox_passwordField")
        this.rePwd1=page.locator("#userDataLightBox_passwordCopyField")
        this.timeZoneDD=page.locator("#userDataLightBox_timeZoneGroupSelectorPlaceholder")
        this.londonOff=page.locator("//ul[@class='x-menu-list']/li[3]")
        this.calender=page.locator("//div[@id='userDataLightBox_hireDatePlaceholder']")
        this.hdate=page.locator("(//div[@class='x-date-picker x-unselectable atap-base-date-picker atap-date-picker']//tbody)[1]//span[text()='10']")
        this.createBtn=page.locator("//span[text()='Create User']")

    }
    async url(){
        await this.page.goto("http://localhost/login.do")
    }
    async userLogin(){
        await this.un.fill("admin")
        await this.pwd.fill("manager")
        await this.btn.click()
    }
    async createNewUser(){
        await this.usersTab.click()
        await this.addUserBtn.click()
        await this.fName.fill("Praveen")
        await this.lName.fill("Ghali")
        await this.eMail.fill("pmg@gmail.com")
        await this.usn.fill("PraveenG")
        await this.pwd1.fill("praveenG123")
        await this.rePwd1.fill("praveenG123")
        await this.timeZoneDD.click()
        await this.londonOff.click()
        await this.calender.click()
        await this.hdate.click()
        await this.createBtn.click()
    }
}
export default user