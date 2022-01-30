
const Employee = require("../lib/Employee");

describe('Employee', () => {
    describe('New', () => {
        it("should create a new instance of employee with the given values", () =>{
            const e = new Employee("john", 1, "john@john.com");
            expect(e.name).toEqual("john");
            expect(e.id).toEqual(1);
            expect(e.email).toEqual("john@john.com")
        });
        it("should be able to retrieve the values for name using getName()", () =>{
            const e = new Employee("john", 1, "john@john.com");
            expect(e.getName()).toEqual("john");
        });
        it("should be able to retrieve the values for Id using getId()", () =>{
            const e = new Employee("john", 1, "john@john.com");
            expect(e.getId()).toEqual(1);
        });
        it("should be able to retrieve the values for Email using getEmail()", () =>{
            const e = new Employee("john", 1, "john@john.com");
            expect(e.getEmail()).toEqual("john@john.com");
        });
        it("should be able to retrieve the values for Role using getRole()", () =>{
            const e = new Employee("john", 1, "john@john.com");
            expect(e.getRole()).toEqual("Employee");
        });
    });
});