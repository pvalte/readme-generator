module.exports = readmeData => {
    return `# ${readmeData.title}

## Description

    ${readmeData.description}

* [Coding guidelines](https://github.com/microsoft/vscode/wiki/Coding-Guidelines)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)

## Installation

    ${readmeData.instructions}
    
## Usage

    ${readmeData.usage}
    
## Contributing

    ${readmeData.contribution}
    
## Tests

    ${readmeData.test}
    
## License

    ${readmeData.license}
        
## Questions

    Github: http://github.com/${readmeData.username}/
    Email: ${readmeData.email}
    `;
};