const {I, createIssuePage} = inject();

module.exports = {
    // setting locators
    fields: {
        project: '#project',
        issueType: 'Issue Type',
        summary: '#summary',
        reporter: '#reporter-field',
        description: 'Description'
    },

    createIssueButton: '#create-issue-submit',

    // methods
    sendForm(project, issueType, summary, reporter, description) {
       // I.selectOption(this.project, project);
        //I.selectOption(this.issueType, issueType);
        I.fillFieldWithTimeout(this.fields.summary, summary);
        I.clearField(this.fields.reporter, reporter);
        I.fillFieldWithTimeout(this.fields.reporter, reporter);
     //   I.waitForElement('#create_link');
        I.fillField(this.fields.description, description);
        I.click(this.createIssueButton);
    },
};