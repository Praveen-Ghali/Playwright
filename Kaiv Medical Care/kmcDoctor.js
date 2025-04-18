class DoctorModule{
    constructor(page){
        this.patient=page.locator("//span[text()='Patient']")
        this.addPatient=page.locator("//button[contains(text(),'Add Patient')]")
        this.nameTxt=page.locator("//input[@name='name']")
        this.emailTxt=page.locator("//input[@name='email']")
        this.pwdTxt=page.locator("//input[@name='password']")
        this.addTxt=page.locator("//textarea[@name='address']")
        this.phoneTxt=page.locator("//input[@name='phone']")
        this.genderDD=page.locator("//select[@name='sex']")
        this.dobTxt=page.locator("//input[@name='birth_date']")
        this.ageTbx=page.locator("//input[@name='age']")
        this.bloodGroupDD=page.locator("//select[@name='blood_group']")
        //this.uploadImage=page.locator("//span[text()='Select image']/../..")
        this.uploadImage=page.locator("//input[@type='file']")
        this.submitBtn=page.locator("//input[@class='btn btn-success']")
        
        //BED ALLOTMENT TO PATIENT
        this.bedAllotmentTab=page.locator("//span[text()='Bed Allotment']")
        this.addbedAllotment=page.locator("//button[contains(text(),'Add Bed Allotment')]")
        this.bedNumberDD=page.locator("//select[@name='bed_id']")
        this.patientDD=page.locator("//select[@name='patient_id']")
        this.allotmentDate=page.locator("//input[@name='allotment_timestamp']")
        this.dischargeDate=page.locator("//input[@name='discharge_timestamp']")
        this.submit=page.locator("//input[@class='btn btn-success']")
        
    }
    async createPatient(){
        await this.patient.click()
        await this.addPatient.click()
        await this.nameTxt.fill("Rahul")
        await this.emailTxt.fill("rahul@gmail.com")
        await this.pwdTxt.fill("rahul@123")
        await this.addTxt.fill("vijayapura shastri market ")
        await this.phoneTxt.fill("897456123")
        await this.genderDD.selectOption("Male")
        await this.dobTxt.fill("14/07/1997")
        await this.ageTbx.fill("58")
        await this.bloodGroupDD.selectOption("O-")
        // const fileInput = await this.uploadImage
        // await fileInput.setInputFiles("Kaiv Medical Care/Images/Dr.vinay.png")
        await this.uploadImage.setInputFiles("Kaiv Medical Care/Images/Dr.vinay.png")
        await this.submitBtn.click()
    }
    async bedAllotment(){
        await this.bedAllotmentTab.click()
        await this.addbedAllotment.click()
        await this.bedNumberDD.selectOption("10 - ward")
        await this.patientDD.selectOption("rahul")
        await this.allotmentDate.fill("12/04/2025")
        await this.dischargeDate.fill("13/04/2025")
        await this.submit.click()
    }

}
export default DoctorModule