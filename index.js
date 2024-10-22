// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import { renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown } from "./generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = ["What is the project title?", 
    "What is the project description?",
    "How do you install your project?",
    "What are the instructions to use your project?",
    "How can other developers contribute?",
    "How can you run tests on this project?",
    "What is your GitHub username?",
    "What is your email?",
    "What license did you use?"
];
function init() {
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0]

        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },

        {
            type: 'input',
            name: 'installation',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'instructions',
            message: questions[3]
        },
        {
            type: 'input',
            name: 'contribute',
            message: questions[4]
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[5]
        },
        {
            type: 'input',
            name: 'github',
            message: questions[6]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[7]
        },
        {
            type: 'list',
            name: 'license',
            message: questions[8],
            choices: ['MIT', 'Apache 2.0', 'ISC', 'Boost']
        }







    ])
    .then((data) => {
        let fileData = generateMarkdown(data);
        writeToFile('README.md', fileData);

    })
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("successfully created")
        }
    }

    )
}

// TODO: Create a function to initialize app


// Function call to initialize app
init();
