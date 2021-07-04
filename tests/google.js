module.exports = {

    '@tags': ['google'],

    'Google advanced search: Elon Musk' (browser){

       const page = browser.page.googleAdvancedSearch();
       const mainQuey = 'Elon Musk';
        
        page
            
            .navigate()
            .setQuery(mainQuey)
            .selectFilter('@languageDropDownOpener', 'lang_it')
            .press('@submitButton'  );
            

        browser            
            
            .saveScreenshot('tests_outputs/google.png');
    }
}