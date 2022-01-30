const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    describe('New', () => {
        it("should create a new instance of Engineer with the given values", () =>{
            const e = new Engineer("john", 1, "john@john.com", "john1234");
            expect(e.name).toEqual("john");
            expect(e.id).toEqual(1);
            expect(e.email).toEqual("john@john.com")
            expect(e.github).toEqual("john1234")
        });
        it("should be able to retrieve the values for name using getName()", () =>{
            const e = new Engineer("john", 1, "john@john.com", "john1234");
            expect(e.getName()).toEqual("john");
        });
        it("should be able to retrieve the values for Id using getId()", () =>{
            const e = new Engineer("john", 1, "john@john.com", "john1234");
            expect(e.getId()).toEqual(1);
        });
        it("should be able to retrieve the values for Email using getEmail()", () =>{
            const e = new Engineer("john", 1, "john@john.com", "john1234");
            expect(e.getEmail()).toEqual("john@john.com");
        });
        it("should be able to retrieve the values for Role using getRole()", () =>{
            const e = new Engineer("john", 1, "john@john.com", "john1234");
            expect(e.getRole()).toEqual("Engineer");
        });
        it("should be able to retrieve the values for Github using getGithub()", () =>{
            const e = new Engineer("john", 1, "john@john.com", "john1234");
            expect(e.getGithub()).toEqual("john1234");
        });
    });
});