// create the about section
const generateLicenseBadge = licenseText => {
    console.log(licenseText);
    switch (licenseText) {
        case 'GNU AGPLv3':
            return `[![AGPL]()](https://www.gnu.org/licenses/agpl-3.0.html)`;
        case 'GNU GPLv3':
            return `[![AGPL]()](https://www.gnu.org/licenses/agpl-3.0.html)`;
        case 'GNU LGPLv3':
            return `[![AGPL]()](https://www.gnu.org/licenses/agpl-3.0.html)`;
        case 'Mozilla Public License 2.0':
            return `[![AGPL]()](https://www.gnu.org/licenses/agpl-3.0.html)`;
        case 'Apache License 2.0':
            return `[![AGPL]()](https://www.gnu.org/licenses/agpl-3.0.html)`;
        case 'Boost Software License 1.0':
            return `[![AGPL]()](https://www.gnu.org/licenses/agpl-3.0.html)`;
        case 'The Unlicense':
            return `[![AGPL]()](https://www.gnu.org/licenses/agpl-3.0.html)`;
        default:
            return ``;
    }
};



module.exports = readmeData => {
    return `# ${readmeData.title}
${generateLicenseBadge(readmeData.license[0])}

## Description

    ${readmeData.description}

## Table of Contents

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

Licensed under the [${readmeData.license}](LICENSE.txt) license.
        
## Questions

* View my Github at http://github.com/${readmeData.username}/
* Please email any questions to  ${readmeData.email}
    `;
};