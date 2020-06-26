const { I, mainPage } = inject();

module.exports = {

    // setting locators
    fields: {
        username: '#login-form-username',
        password: '#login-form-password',

    },
    loginButton: '#login',

    // methods
    login(username, password) {
        I.fillField(this.fields.username, username);
        I.fillField(this.fields.password, password);
        I.checkOption('Remember my login on this computer');
        I.click(this.loginButton);
    }
};
