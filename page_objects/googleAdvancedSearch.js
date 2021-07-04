module.exports = {
    url: 'https://www.google.es/advanced_search',
    elements: {
        mainQueryInput :'input[name="as_q"]',
        languageDropDownOpener : '#lr_button',
        languageDropDownValue :'.goog-menuitem[value = "lang_it"]',
        submitButton : '.jfk-button[type = "submit"]',
        acceptCookieButton : '#L2AGLb',
        ResultsQueryPageQuerySelector :'#searchform input[name = "q"][value = "Elon Musk"]',
        toolsButtonSelector :'#hdtb-tls' 
    },
    commands: [{

        setQuery (value){
            return this
                .setValue ('@mainQueryInput', value);
        },
        selectFilter(selector,value)
        {
                return this
                    .click(selector)
                    .click( `.goog-menuitem[value = "${value}"]`);
            
        },
        press(button){
            return this
                .click (button)
        }


    }]
}