const Employee = require("./Employee");

//this class is an extention of the employee class so it just needs to return Intern for the role and also the school 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    };
    getRole() {
        return "Intern"
    };
    getSchool() {
        return this.school;
    };
};
//export the class so it can be used elsewhere.
module.exports = Intern;