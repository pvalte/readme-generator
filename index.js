// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./src/readme-template.js');

// Array of questions for user input 
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
        type: 'list',
        name: 'license',
        message: 'Select a license',
        choices: ['None', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        default: 'None'
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


// Function to write README file
function writeToFile(fileName, data) {
    const readme = generateReadme(data);

    fs.writeFile(fileName, readme, err => {
        if (err) throw new Error(err);

        console.log('Portfolio complete! Check out readme.md to see the output!');
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(readmeData => writeToFile('README.md', readmeData));
}

// Function call to initialize app
init();
