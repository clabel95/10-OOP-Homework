const Employee = require("./Employee");

//this class is an extention of the employee class so it just needs to return engineer for the role and also it needs to return the github username.
class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    getRole() {
        return "Engineer";
    };
    getGithub() {
        return this.github
    };
};
//export the class so it can be used elsewhere.
module.exports = Engineer;