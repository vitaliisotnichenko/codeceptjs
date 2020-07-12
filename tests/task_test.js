Feature('task');

Before((I) => {

    I.amOnPage('/');

});

Scenario('create new task', async (I, mainPage, createIssuePage) => {

    mainPage.loginWith('webinar5', 'webinar5');
    I.waitForElement('#create_link');
    I.click('#create_link');
    createIssuePage.sendForm('Webinar (WEBINAR)', 'Bug', 'New bug', 'webinar5', 'description');
    I.see('New bug has been successfully created.');

});

