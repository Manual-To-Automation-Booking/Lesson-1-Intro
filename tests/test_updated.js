const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");
var assert = require('assert');
 
async function first_test(){
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        var searchString = "Automated Search String";
 
        //To fetch http://google.com from the browser with our code.
        await driver.get("http://duckduckgo.com");
            
        
        await driver.findElement(By.id("searchbox_input")).sendKeys(searchString,Key.RETURN);
 
        //Verify the page title and print it
        var title = await driver.getTitle();
        console.log('Title is:',title);

        assert(title == "Automated Search String at DuckDuckGo", "Title is not matching");

        await driver.quit();
    } catch (e) {
        //It is always a safe practice to quit the browser after execution
        //await driver.quit();
        console.log("*** ERROR ***\n\n", e);
        console.log("\n*** END OF ERROR ***\n\n");
        await driver.quit();
    }
    
    //It is always a safe practice to quit the browser after execution
    
}
 
first_test()