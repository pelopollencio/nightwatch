module.exports  = {
    'My first test case '(browser){
        browser
            .url('https://news.ycombinator.com/news')
            .waitForElementVisible('.hnname')
            .assert.containsText(".hnname", "Hacker News")
    }
}