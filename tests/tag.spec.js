import {test,expect} from "@playwright/test"
test('test1@sanity',async({page})=>{
    console.log("this is test-1");
    
})
test('test2@sanity',async({page})=>{
    console.log("this is test-2");
    
})
test('test3@regression',async({page})=>{
    console.log("this is test-3");
    
})
test('test4@sanity@regression',async({page})=>{
    console.log("this is test-4");
    
})
