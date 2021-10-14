// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the repository? (Required)',
        validate: repoInput => {
            if (repoInput) {
              return true;
            } else {
              console.log('Please enter the repository title!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the repository description: (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter a description!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'What are the installation instructions? (Required)',
        validate: instructionsInput => {
            if (instructionsInput) {
              return true;
            } else {
              console.log('Please enter the installation instructions!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information: (Required)',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please enter usage information!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution guidelines: (Required)',
        validate: contributionInput => {
            if (contributionInput) {
              return true;
            } else {
              console.log('Please enter the contribution guidelines!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter the test instructions: (Required)',
        validate: testInput => {
            if (testInput) {
              return true;
            } else {
              console.log('Please enter test instructions!');
              return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select a license',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your github username: (Required)',
        validate: usernameInput => {
            if (usernameInput) {
              return true;
            } else {
              console.log('Please enter your github username!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your email address!');
              return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
