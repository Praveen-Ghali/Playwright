import excel from "exceljs"
import {test} from "@playwright/test"
test('read excel data',async({page})=>{
    await seletData(1,1);
})
async function seletData(i,j){
    let book =new excel.Workbook()
    await book.xlsx.readFile('testData/HMSLogin.xlsx')
    let sheet=book.getWorksheet('Sheet2')
    let data=sheet.getRow(i).getCell(j).toString()
    console.log(data);
    

}
//await seletData(1,1);
//export default seletData;