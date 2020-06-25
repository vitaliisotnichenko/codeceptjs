Feature('login');

Scenario('Login with correct credentials', (I) => {
    I.amOnPage('/');
    I.fillField('#login-form-username', 'webinar5');
    I.fillField('#login-form-password', 'webinar5');
    I.checkOption('Remember my login on this computer');
    I.click('#login');
    I.see('Assigned to Me');
});

Scenario('Login with invalid credentials', (I) => {
    I.amOnPage('/');
    I.fillField('#login-form-username', 'web5');
    I.fillField('#login-form-username', 'web5');
    I.checkOption('Remember my login on this computer');
    I.click('#login');
    I.see('Sorry, your username and password are incorrect - please try again.')
});