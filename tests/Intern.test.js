const Intern = require("../lib/Intern");

describe('Intern', () => {
    describe('New', () => {
        it("should create a new instance of Intern with the given values", () =>{
            const e = new Intern("john", 1, "john@john.com", "ACC");
            expect(e.name).toEqual("john");
            expect(e.id).toEqual(1);
            expect(e.email).toEqual("john@john.com")
            expect(e.school).toEqual("ACC")
        });
        it("should be able to retrieve the values for name using getName()", () =>{
            const e = new Intern("john", 1, "john@john.com", "ACC");
            expect(e.getName()).toEqual("john");
        });
        it("should be able to retrieve the values for Id using getId()", () =>{
            const e = new Intern("john", 1, "john@john.com", "ACC");
            expect(e.getId()).toEqual(1);
        });
        it("should be able to retrieve the values for Email using getEmail()", () =>{
            const e = new Intern("john", 1, "john@john.com", "ACC");
            expect(e.getEmail()).toEqual("john@john.com");
        });
        it("should be able to retrieve the values for Role using getRole()", () =>{
            const e = new Intern("john", 1, "john@john.com", "ACC");
            expect(e.getRole()).toEqual("Intern");
        });
        it("should be able to retrieve the values for school using getSchool()", () =>{
            const e = new Intern("john", 1, "john@john.com", "ACC");
            expect(e.getSchool()).toEqual("ACC");
        });
    });
});