class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };
    //function ot get name
    getName(){
        return this.name;
    };
    //function to get ID
    getId(){
        return this.id;
    };
    //function to get Email
    getEmail(){
        return this.email;
    };
    //function to get Role --- returns 'Employee'
    getRole(){
        return "Employee";
    };
};
//export the class so it can be used elsewhere.
module.exports = Employee;