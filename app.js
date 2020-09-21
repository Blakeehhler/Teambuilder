const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const render = require("./lib/htmlRenderer");
let employees = [];

inquirer
    .prompt([{
            message: "What is your managers name?",
            name: "name",
        },
        {
            message: "What is your managers id?",
            name: "id",
        },
        {
            message: "What is your managers office number?",
            name: "officenum",
        },
        {
            message: "What is the managers email?",
            name: "email",
        },
    ])
    .then(function(manager) {
        //build a manager object and push into employees array
        employees.push(new Manager(manager.name, manager.id, manager.officenum, manager.email))
        console.log(manager);
        console.log(employees)
        addEmployee();
    });

//function to add employee
function addEmployee() {
    inquirer
        .prompt([{
            type: "list",
            message: "Who would you like to add?",
            name: "engineerOrIntern",
            choices: ["Engineer", "Intern", "Quit"],
        }, ])
        .then(function({ engineerOrIntern }) {
            if (engineerOrIntern === "Engineer") {
                //prompt for engineer details
                engineerPrompt();
            } else if (engineerOrIntern === "Intern") {
                //Prompt for intern details
                internPrompt();
            } else {
                //Writes to file
                fs.writeFile("index.html", render(employees), () => {});
            }
        });
}
//Prompt for engineer option being selected
function engineerPrompt() {
    inquirer
        .prompt([{
                message: "What is your engineers name?",
                name: "name",
            },
            {
                message: "What is your engineers id?",
                name: "id",
            },
            {
                message: "What is this engineers email?",
                name: "email",
            },
            {
                message: "What is this engineers github?",
                name: "github",
            },
        ])
        .then(function(engineer) {
            //Build engineer add to employees array
            employees.push(new Engineer(engineer.name, engineer.id, engineer.email, engineer.github))
            console.log(engineer);
            console.log(employees);
            addEmployee();
        });
}

//function if intern is selected
function internPrompt() {
    inquirer
        .prompt([{
                message: "What is the interns name?",
                name: "name",
            },
            {
                message: "What is the interns id?",
                name: "id",
            },
            {
                message: "What is the interns email?",
                name: "email",
            },
            {
                message: "What is the interns school?",
                name: "school",
            },
        ])
        .then(function(intern) {
            //Build engineer add to employees array
            employees.push(new Intern(intern.name, intern.id, intern.email, intern.school))
            console.log(intern);
            console.log(employees)
            addEmployee();
        });
}