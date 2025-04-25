import {test,expect} from "@playwright/test"
import excel from "exceljs"
test('read data from the excel',async({page})=>{
    let book=new excel.Workbook();
    await book.xlsx.readFile('testData/HMSLogin.xlsx')
    let sheet=book.getWorksheet("Sheet1")
    let rCount=sheet.rowCount;
    let cCount=sheet.columnCount;
    for(let i=1; i<=rCount;i++){
        for(let j=1; j<=cCount; j++){
            let data=sheet.getRow(i).getCell(j).toString()
            console.log(data);
        }
    }
    
    
})
test('write data into the excel',async({page})=>{
    let book=new excel.Workbook();
    await book.xlsx.readFile('testData/HMS.xlsx')
    //let sheet=book.addWorksheet('Sheet2')     //it will add new sheet to the excel file
    let sheet=book.getWorksheet('Sheet2')
    sheet.getRow(1).getCell(1).value="Giri"
    await book.xlsx.writeFile("testData/HMS.xlsx")
})

