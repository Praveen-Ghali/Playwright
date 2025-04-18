class Department{
    constructor(page){
        this.addDeptBtn=page.locator("//button[contains(text(),'Add Department')]")
        this.nameTxtField=page.locator("//input[@name='name']")
        this.descriptionTxtArea=page.locator("//textarea[@name='description']")
        this.submitBtn=page.locator("//input[@class='btn btn-success']")
    }
    async department(deptName,workigHour){
        await this.addDeptBtn.click()
        await this.nameTxtField.fill(deptName)
        await this.descriptionTxtArea.fill(workigHour)
        await this.submitBtn.click()
    }
}
export default Department