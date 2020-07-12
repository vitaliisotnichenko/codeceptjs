const { I, mainPage } = inject();

module.exports = {

    // setting locators
    fields: {
        username: '#login-form-username',
        password: '#login-form-password',
        //username: 'Username',
        //password: 'Password',

    },
    loginButton: '#login',
    createIssue: '#create_link',

    // methods
    loginWith(username, password) {
        I.fillFieldWithTimeout(this.fields.username, username);
        I.fillFieldWithTimeout(this.fields.password, password);
       // I.fillField(this.fields.username, username);
       // I.fillField(this.fields.password, password);
        I.checkOption('Remember my login on this computer');
        I.click(this.loginButton);
    }
};
