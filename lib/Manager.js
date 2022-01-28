const Employee = require("./Employee");

//this class is an extention of the employee class so it just needs to return Manager for the role and also the office number.
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    getRole() {
        return "Manager";
    };
    getOfficeNumber() {
        return this.officeNumber;
    };
};
//export the class so it can be used elsewhere.
module.exports = Manager;