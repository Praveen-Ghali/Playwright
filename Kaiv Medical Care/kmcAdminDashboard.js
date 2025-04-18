class Dashboard{
    constructor(page){
        this.dept=page.locator("//span[text()='Department']/..")
        this.logoutBtn=page.locator("//a[contains(text(),'Log Out ')]")
        
    }
    async dashboard(){
       await this.dept.click()
       
    }
    async logout(){
        await this.logoutBtn.click()
    }
    
}
export default Dashboard