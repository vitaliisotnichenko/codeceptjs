const {I, createIssuePage} = inject();

module.exports = {
    // setting locators
    fields: {
        project: '#project',
        issueType: 'Issue Type',
        summary: 'Summary',
        reporter: 'Reporter',
        description: 'Description'
    },

    createIssueButton: '#create-issue-submit',

    // methods
    sendForm(project, issueType, summary, reporter, description) {
       // I.selectOption(this.project, project);
        //I.selectOption(this.issueType, issueType);
        I.clearField(this.fields.summary);
        I.fillField(this.fields.summary, summary);
        I.clearField(this.fields.reporter);
        I.fillField(this.fields.reporter, reporter);
        I.fillField(this.fields.description, description);
        I.click(this.createIssueButton);
    },
};