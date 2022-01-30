const Manager = require("../lib/Manager");

describe('Manager', () => {
    describe('New', () => {
        it("should create a new instance of Engineer with the given values", () =>{
            const e = new Manager("john", 1, "john@john.com", 2);
            expect(e.name).toEqual("john");
            expect(e.id).toEqual(1);
            expect(e.email).toEqual("john@john.com")
            expect(e.officeNumber).toEqual(2)
        });
        it("should be able to retrieve the values for name using getName()", () =>{
            const e = new Manager("john", 1, "john@john.com", 2);
            expect(e.getName()).toEqual("john");
        });
        it("should be able to retrieve the values for Id using getId()", () =>{
            const e = new Manager("john", 1, "john@john.com", 2);
            expect(e.getId()).toEqual(1);
        });
        it("should be able to retrieve the values for Email using getEmail()", () =>{
            const e = new Manager("john", 1, "john@john.com", 2);
            expect(e.getEmail()).toEqual("john@john.com");
        });
        it("should be able to retrieve the values for Role using getRole()", () =>{
            const e = new Manager("john", 1, "john@john.com", 2);
            expect(e.getRole()).toEqual("Manager");
        });
        it("should be able to retrieve the values for Office Number using getOfficeNumber()", () =>{
            const e = new Manager("john", 1, "john@john.com", 2);
            expect(e.getOfficeNumber()).toEqual(2);
        });
    });
});