Feature('task');

Before((I) => {
    I.amOnPage('/');
});
Scenario('create new task', (I, mainPage) => {
    mainPage.login('webinar5', 'webinar5');
    I.waitForElement('#create_link', 10);
    I.click('#create_link');
    within('.aui', () => {
        I.click('#project-field');
        I.waitForElement('#summary');
        I.fillField('#summary', 'Codecept');
        I.click('#create-issue-submit');
    });
    //I.click('#project-field');
    //I.waitForElement('#summary');
   // I.fillField('#summary', 'Codecept');
    //I.click('#create-issue-submit');
    I.see('Codecept has been successfully created.')
});
