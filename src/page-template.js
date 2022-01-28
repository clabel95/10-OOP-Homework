//function that creates the html with placeholder data that will be passed through using index.js

//first I am creating a function to wrap around all the employees.
const populate_Employees = All_Employees => {

    //I am starting with the manager since there will only be one.
    const populate_Manager = Manager =>{
        return`
        <div class="row">
            <div class="col-sm-3">
                <div class="card">
                    <div class="card-header" style = "background-color: rgb(59, 59, 238); color: white">
                        <h2 class="card-title">${Manager.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>  ${Manager.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${Manager.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
                            <li class="list-group-item">Office number: ${Manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            
        `;
    };
    //Next is the function to populate the engineer employee
    const populate_Engineer = Engineer =>{
        return `
        <div class="row">
            <div class="col-sm-3">
                <div class="card employee-card">
                    <div class="card-header" style = "background-color: rgb(59, 59, 238); color: white">
                        <h2 class="card-title">${Engineer.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-glasses"></i></i>  ${Engineer.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${Engineer.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.getGithub()}" target="_blank">${Engineer.getGithub()}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `;
    };
    //Next is the function to populate the Intern employee
    const populate_Intern = Intern => {
        return `
        <div class="row">
            <div class="col-sm-3">
                <div class="card employee-card">
                    <div class="card-header" style = "background-color: rgb(59, 59, 238); color: white">
                        <h2 class="card-title">${Intern.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-user-graduate"></i>  ${Intern.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${Intern.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                            <li class="list-group-item">School: ${Intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `;
    };

    //make a const to hold all the html data.
    const html_page = [];

    //this will go through all roles and using the corosponding template will populate the html.
    html_page.push(All_Employees
        .filter(Employee => Employee.getRole() === "Manager")
        .map(Manager => populate_Manager(Manager))
    );
    html_page.push(All_Employees
        .filter(Employee => Employee.getRole() === "Engineer")
        .map(Engineer => populate_Engineer(Engineer))
        .join("")
    );
    html_page.push(All_Employees
        .filter(Employee => Employee.getRole() === "Intern")
        .map(Intern => populate_Intern(Intern))
        .join("")
    );

    return html_page.join("");
}

module.exports = All_Employees => {
    return`
    <DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css">
        <title>Team List</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid" style = "background-color: teal; color: white; display:flex;">
            <div class = "continer" >
                <h1 class = "display-4">My Team</h1>
            </div>
        </div>

        <div class = "container">
            <div class = "row">
                <div class="col-12 justify-content-center d-flex">
                    ${populate_Employees(All_Employees)}
                </div>
            </div>
        </div>
    </body>
    </html>   
    `;
};

