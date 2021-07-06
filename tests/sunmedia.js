module.exports = {

    '@tags': ['sunmedia'],

    'Creating a app for sunmedia' (browser){

       const page = browser.page.sunMediaLogin()
       const emailInputUser = 'dabru96@gmail.com'
       const passwordInputUser = 'Sunmedia123'
       const addImageInputUser = '/home/orosky/Documentos/Nightwatch/thumb-1920-159547.jpg'
       const addNameInputUser = 'The best app'
       const addIdInputUser = '1234321'

        
        page
            .navigate()
            .pause (1 * 1000)
            .login (emailInputUser, passwordInputUser)
            .menuSelector()
            .createApp(addImageInputUser, addNameInputUser, addIdInputUser)
    }
}