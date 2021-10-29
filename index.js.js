const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./utilities/Markdown");

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, markDown(data))
};

function init() {
    inquirer
        .prompt(questions)
        .then((data) => writeToFile("README.md", data))
        .then(() => console.log("File written successfully"))
        .catch((err) => console.error(err))
};

const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "Describe your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What is the link for your deployed project?",
        name: "installation",
    },
    {
        type: "input",
        message: "How will your project be used?",
        name: "usage",
    },
    {
        type: "input",
        message: "List your contributers and sources.",
        name: "contributing",
    },
    {
        type: 'input',
        message: 'How would your project be tested?',
        name: 'testing',
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is the link to your GitHub profile?",
        name: "profile",
    },
    {
        type: "input",
        message: "What is your preferred email address?",
        name: "email",
    },
    {
        type: "list",
        message: "Select the license to be used.",
        choices: ["Apache License 2.0", "MIT", "Mozilla Public License 2.0"],
        name: "license",
    },
];

init();











