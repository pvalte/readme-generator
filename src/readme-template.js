module.exports = readmeData => {
    return `# ${readmeData.title}

## Description

    ${readmeData.description}

## Table of Contents
    [Installation](#Installation)
    [Usage](#Usage)
    [Contributing](#Contributing)
    [Tests](#Tests)
    [License](#License)
    [Questions](#Questions)

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