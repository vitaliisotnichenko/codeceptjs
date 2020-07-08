Feature('login');

Before((I) => {
    I.amOnPage('/');
});

Scenario('Login with correct credentials', (I, mainPage) => {
    mainPage.loginWith('webinar5', 'webinar5');
    I.see('Assigned to Me');
});


Scenario('Login with invalid credentials', (I, mainPage) => {
    mainPage.loginWith('web5', 'web5');
    I.see('Sorry, your username and password are incorrect - please try again.')
});
