module.exports = {
    url: 'https://mediation.labcavegames.com/login',
    elements: {
      
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