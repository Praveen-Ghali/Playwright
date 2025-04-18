class kmcNurse{
    constructor(page){
        this.bedWardDD=page.locator("//span[text()='Bed / Ward']/../..")
        this.manageBed=page.locator("(//span[text()='Bed / Ward']/../..//span)[2]")
        this.addBed=page.locator("//button[contains(text(),'Add Bed')]")
        this.bedNo=page.locator("//input[@name='bed_number']")
        this.bedType=page.locator("//select[@name='type']")
        this.description=page.locator("//textarea")
        this.submit=page.locator("//input[@class='btn btn-success']")

        //ALLOCATE BED TO THE PATIENT
        this.bedAllotmentTab=page.locator("//span[text()='Bed Allotment']")
        this.addBedAllotmentBtn=page.locator("//button[contains(text(),'Add Bed Allotment')]")
        this.bedNum=page.locator("//select[@name='bed_id']")
        this.patientDD=page.locator("//select[@name='patient_id']")
        this.allotmentDate=page.locator("//input[@name='allotment_timestamp']")
        this.appDate=page.locator("//td[text()='14']")
        this.dischargedate=page.locator("//input[@name='discharge_timestamp']")
        //this.disDate=page.locator("//td[text()='15']")
        //this.selectYear=page.locator("(//th[@class='datepicker-switch'])[1]")
        this.submit1=page.locator("//input[@class='btn btn-success']")

    }
    async createBed(n,i,d){
        await this.bedWardDD.click()
        await this.manageBed.click()
        await this.addBed.click()
        await this.bedNo.fill(n)
        await this.bedType.selectOption(i)
        await this.description.fill(d)
        await this.submit.click()
    }
    async allocateBed(){
        await this.bedAllotmentTab.click()
        await this.addBedAllotmentBtn.click()
        await this.bedNum.selectOption("108 - icu")
        await this.patientDD.selectOption("Dinga")
        //const targetDate = format(new Date(), '14-07-1997');
        //await this.page.fill("//input[@name='allotment_timestamp']", targetDate);
        await this.allotmentDate.click()
        await this.appDate.click()
        await this.dischargedate.fill("04/15/2025")
        //await this.disDate.click()
        //await this.selectYear.click()
        await this.submit1.click()

    }
}
export default kmcNurse