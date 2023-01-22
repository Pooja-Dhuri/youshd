const puppeteer=require("puppeteer")
let page;
// console.log("before")
let browseropen=puppeteer.launch({headless:false});
browseropen.then(function(browser){
    console.log("browseropen")
    let pageopen=browser.pages()
    return pageopen
}).then(function(browserPages){
    page=browserPages[0];
    let getPromise=page.goto("https://app-staging.youshd.com/");
    return getPromise;
})
.then(function(){
    let waitForpagePromise=page.waitForSelector('div>button',{visible:true})
    return waitForpagePromise
})
.then(function(){
    let clickLogin=page.click('div>button')
    return clickLogin
}).then(function(){
    let selectIndia=page.click('div.flag.us')
    return selectIndia
})
.catch(function(err){
    console.log(err)
})
console.log("after")

