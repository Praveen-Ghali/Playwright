//let data= require("testData/sigleData.json")
//import data from "../testData/sigleData.json"
import data from "../testData/data.json"
import {test} from "@playwright/test"
import data1 from "../testData/HMSLogin.json"
test('reading single data',async()=>{
    console.log(data1.Ausn);
    console.log(data1.Apwd);
})

// data.forEach((obj,i)=>{
//     test(`reading multiple obj ${i}`,async()=>{
//         console.log(obj.usn);
//         console.log(obj.pwd);
//         console.log(obj.url);
        
//     })
// })