//run npm i
//run npm i inquirer
//run npm i jest

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist')
const distPath = path.join(DIST_DIR, 'team.html')

const render = require('./src/page-template.js')

const teamMembers = [];
const idArray = [];

const EmployeeQuestions = [
    {
        type: "input",
        name: "ManagerName",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "ManagerId",
        message: "What is the manager's ID?"
    },
    {
        type: "input",
        name: "ManagerEmail",
        message: "What is the manager's emai?"
    },
    {
        type: "input",
        name: "OfficeNumber",
        message: "What is the manager's office number?"
    }
];

function Manager(){
    inquirer.prompt(EmployeeQuestions).then(function(data){
        const Manager = new Manager(data.ManagerName, data.ManagerId, data.ManagerEmail, data.OfficeNumber);
        teamMembers.push(Manager);
        idArray.push(data.ManagerId);
        team();
    });
};

function team() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Which type of member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members"
            ]
        }
    ]).then(function(data){
        if (data.memberChoice === "Engineer"){
            engineer();
        } else if (data.memberChoice === "Intern"){
            intern();
        } else (outputTeam());
    });
};

function engineer() {
    inquirer.prompt([
        {
            type: "input",
            name:"EngineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name:"EngineerId",
            message: "What is the engineer's ID?"
        },
        {
            type: "input",
            name: "EngineerEmail",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "EngineerGithub",
            message: "What is the engineer's GitHub username?"
        }
    ]). then(function(data){
        const engineer = new Engineer(data.EngineerName, data.EngineerId, data.EngineerEmail, data.EngineerGithub);
        teamMembers.push(engineer);
        idArray.push(data.engineerId);
        team();
    });
};

function intern() {
    inquirer.prompt([
        {
            type: "input",
            name: "InternName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "InternId",
            message: "What is the intern's ID?"
        },
        {
            type: "input",
            name: "InternEmail",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "InternSchool",
            message: "What is the intern's school?"
        }
    ]). then(function(data){
        const intern = new Intern(data.InternName, data.InternId, data.InternEmail, data.InternSchool);
        teamMembers.push(intern);
        idArray.push(data.internId);
        team();
    });
};

function outputTeam() {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR)
    }
    fs.writeFileSync(distPath, render(teamMembers), "utf-8");
}

Manager();



inquirer.prompt(menuQuestions)
.then(choice => {console.log(choice)
if (choice.choice === 'Engineer'){
    inquirer.prompt(EngineerQuestions)
    .then(dataDngineer => {
        const engineer1 = new Engineer(dataEngineer.name, )//fill in the rest with the other things like email id ...
        teamMembers.push(engineer1);
        menu();
    })
}else if(choice.choice === 'Intern'){
    inquirer.prompt(InternQuestions)
    .then(dataIntern => {
        const new_intern = new Intern(dataIntern.name, dataIntern.id,)//fill in the rest 
        teamMembers.push(new_intern);
        menu()
    })
}else{
    var template = generateHTML(teamMembers);
    fs.writeFile('index.html', template, (err) =>
    err? console.log(err): console.log('response written to '))
}
})