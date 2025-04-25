import {test,expect} from "@playwright/test"
import kmcLogin from "../Kaiv Medical Care/kmcLogin.js"
import login from "../Kaiv Medical Care/kmcLogin.js"
import kmcAdminDashboard from "../Kaiv Medical Care/kmcAdminDashboard.js"
import kmcAdminDepartment from "../Kaiv Medical Care/kmcAdminDepartment.js"
import kmcAdminDoctor from "../Kaiv Medical Care/kmcAdminDoctor.js"
import DoctorModule from "../Kaiv Medical Care/kmcDoctor.js"
import kmcNurse from "../Kaiv Medical Care/kmcNurse.js"
import kmcPatient from "../Kaiv Medical Care/kmcPatient.js"
import testdata from "../testData/adminData.json"
//const testdata=JSON.parse(JSON.stringify(require("../testData/sigleData.json")))

test("Login as a admin and create new department and new Doctor profile logout from the application",async({page})=>{
    const adminUN=testdata.Ausn
    const adminPWD=testdata.Apwd
    let Login=new login(page)
    await Login.url()
    await Login.kmcAdminLogin(adminUN,adminPWD)
    let Dashboard=new kmcAdminDashboard(page)
    await Dashboard.dashboard()
    
    let Department=new kmcAdminDepartment(page)
    const d1=testdata.Dept
    console.log(d1);
    
    await Department.department(d1,testdata.workingHr)
    
    let Doctor=new kmcAdminDoctor(page)
    const name=testdata.DoctotDetails.name;
    const email=testdata.DoctotDetails.email;
    const pwd=testdata.DoctotDetails.pwd;
    const address=testdata.DoctotDetails.address;
    const phone=testdata.DoctotDetails.phoneNum;
    const DDOpt=testdata.DoctotDetails.option;
    const description=testdata.DoctotDetails.description;
    await Doctor.doctor(name,email,pwd,address,phone,DDOpt,description)
    await Dashboard.logout()
})

test("Login as a Doctor and create Patient and allocate bed for them and logout from the app",async({page})=>{
    let Login=new kmcLogin(page)
    await Login.url()
    await Login.kmcDoctorLogin("vinayak@gmail.com","vinay@123")
    let Doctor=new DoctorModule(page)
    await Doctor.createPatient()
    await Doctor.bedAllotment()
    await expect(page.locator("//div[text()='Bed Allotment Info Saved Successfuly']")).toBeVisible()
    let Dashboard=new kmcAdminDashboard(page)
    await Dashboard.logout()
    //await page.pause()
})
test("Login as a nurse create new bed and allocate bed for the patient",async({page})=>{
    let Login=new kmcLogin(page)
    await Login.url()
    await Login.kmcNurseLogin("madhukumar@gmail.com","madhu@123")
    let Nurse=new kmcNurse(page)
    await Nurse.createBed("108","Icu","Emergency only")
    await Nurse.allocateBed()
    await expect(page.locator("//div[text()='Bed Allotment Info Saved Successfuly']")).toBeVisible()
    let Dashboard=new kmcAdminDashboard(page)
    await Dashboard.logout()
    await page.pause()

})
test("Logion as a Patient and take appointment for the doctor then logout and login as a doctor approve the appointment of the Patient and logout as doctor",async({page})=>{
    let Login=new kmcLogin(page)
    await Login.url()
    await Login.kmcPatientLogin("hari@gmail.com","hari@123")
    
    let Patient=new kmcPatient(page)
    await Patient.takeAppointment()
    await expect(await page.locator("//div[text()='Request For Appointment Sent']")).toBeVisible()
    let Dashboard=new kmcAdminDashboard(page)
    await Dashboard.logout()
    await Login.kmcDoctorLogin("vinayak@gmail.com","vinay@123")
    await Patient.approveAppointment();
    await expect(await page.locator("//div[text()='Appointment Info Approved']")).toBeVisible()
    await page.pause()
})

 