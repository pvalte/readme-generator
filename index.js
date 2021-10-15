// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./src/readme-template.js');

const mockData = {
    title: 'readme-generator',
    description: 'makes read meeeeeees. This repository ("`Code - OSS`") is where we (Microsoft) develop the product together with the community. Not only do we work on code and issues here, we also publish our. This source code is available to everyone under the standard. ',
    instructions: 'do it right. There are many ways in which you can participate in this project, for example: Submit bugs and feature requests, Review source code changes, Review the documentation. If you are interested in fixing issues and contributing directly to the code base, please see the document',
    usage: 'use to make a qwuality readme for your repo. This repository includes a Visual Studio Code Remote - Containers / GitHub Codespaces development container.',
    contribution: 'none There are many ways in which you can participate in this project, for example: Submit bugs and feature requests, Review source code changes, Review the documentation. If you are interested in fixing issues and contributing directly to the code base, please see the document',
    test: 'test throughly e are many ways in which you can participate in this project, for example: Submit bugs and feature reques e are many ways in which you can participate in this project, for example: Submit bugs and feature reques e are many ways in which you can participate in this project, for example: Submit bugs and feature reques e are many ways in which you can participate in this project, for example: Submit bugs and feature reques e are many ways in which you can participate in this project, for example: Submit bugs and feature reques e are many ways in which you can participate in this project, for example: Submit bugs and feature reques e are many ways in which you can participate in this project, for example: Submit bugs and feature reques e are many ways in which you can participate in this project, for example: Submit bugs and feature reques e are many ways in which you can participate in this project, for example: Submit bugs and feature reques e are many ways in which you can participate in this project, for example: Submit bugs and feature reques e are many ways in which you can participate in this project, for example: Submit bugs and feature reques',
    license: ['CSS'],
    username: 'pvalte',
    email: 'pvaltemare@gmail.com'
};

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
function writeToFile(fileName, data) {
    const readme = generateReadme(data);

    fs.writeFile(fileName, readme, err => {
        if (err) throw new Error(err);

        console.log('Portfolio complete! Check out readme.md to see the output!');
    });
}

// TODO: Create a function to initialize app
function init() {
    // inquirer.prompt(questions)
    // .then(readmeData => writeToFile('README.md', readmeData));
    writeToFile('README.md', mockData);
}

// Function call to initialize app
init();
