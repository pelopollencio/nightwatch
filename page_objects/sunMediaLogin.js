module.exports = {
    url: 'https://mediation.labcavegames.com/login',
    elements: {

        emailInput : 'input[aria-label = "E-mail"]',
        passwordInput : 'input[aria-label ="Password"',
        loginButton: '.js-login[type="submit"]',
        menuButton: '.toolbar__drawer-btn[type="button"]',
        appButton: 'div.white--text:nth-child(3) > a:nth-child(1) > div:nth-child(2)',
        newAppButton: '.btn-new-app > div',
        newAppRadio: 'label.input-radio-container:nth-child(3) > input:nth-child(2)',
        addImageInput: '/html/body/div/div[40]/div/div[1]/div[2]/div/div[3]/form/div[1]/div[2]/div/div/span/span/label',
        appNameInput: 'input[placeholder="App name"]',          
        appIdInput: 'input[placeholder="Store ID"]',
        complianceButton: '.v-input__append-outer > svg:nth-child(1) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1) > rect:nth-child(1)',
        createButton: 'button.white--text:nth-child(3) > div:nth-child(1)'
      
    },
    commands: [{

        login (User, Password){
            return this
                .setValue('@emailInput',User)
                .setValue('@passwordInput', Password)
                .click ('@loginButton')
                .pause(1000)
                .saveScreenshot('tests_output/menuLogin.png')
        },

        menuSelector(){
            return this
                .click('@menuButton')
                .click('@appButton')
                .pause(1000)
                .saveScreenshot('tests_output/menuOptions')
                .click('@newAppButton')
                .pause(1000)
                .saveScreenshot('tests_output/menuSelected.png')
        },

        createApp(image, name, id,){
            return this
                .click('@newAppRadio')
                //.useXpath().setValue('/html/body/div/div[40]/div/div[1]/div[2]/div/div[3]/form/div[1]/div[2]/div/div/span/span/label',require('path').resolve(image))
                .setValue ('@appNameInput', name)
                .setValue ('@appIdInput', id)
                .click('@complianceButton')
                .useXpath().click('@createButton')
                .pause(1000)
                .saveScreenshot('tests_output/appCreated.png')

            }
    }]
}