import { expect } from "@playwright/test"

class kmcPatient{
    constructor(page){
        this.page=page
        this.appointmentDD=page.locator("//span[text()='Appointment']/..");
        this.appointment=page.locator("//span[text()='Appointment List']")
        this.applyForAppointment=page.locator("//button[contains(text(),'Apply For Appointment')]")
        this.date=page.locator("//input[@name='date_timestamp']")
        this.doctorDD=page.locator("//select[@name='doctor_id']")
        this.submitBtn=page.locator("//input[@class='btn btn-success']")

        //taking doctor approval
        this.appDD=page.locator("//span[text()='Appointment']")
        this.appReqOpt=page.locator("//span[text()='Requested Appointments']")
        this.approveBtn=page.locator("//body[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/a[1]")
        this.approveBtn1=page.locator(".btn btn-success")
    }
    async takeAppointment(){
        await expect(this.appointmentDD).toBeVisible()
        await this.appointmentDD.click()
        await this.appointment.click()
        await this.applyForAppointment.click()
        await this.date.fill("04/14/2025")
        await this.doctorDD.selectOption('Dr.Vinayak')
        await this.submitBtn.click()
    }
    async approveAppointment(){
        await this.appDD.click()
        await this.appReqOpt.click()
        await this.approveBtn.click()
        await this.approveBtn1.click()
    }
}
export default kmcPatient