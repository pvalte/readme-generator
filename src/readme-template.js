// create the about section
const generateLicenseBadge = licenseText => {
    console.log(licenseText);
    switch (licenseText) {
        //Source:https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
        case 'GNU AGPLv3':
            return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
        case 'GNU GPLv3':
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        case 'GNU LGPLv3':
            return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
        case 'Mozilla Public License 2.0':
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        case 'Apache License 2.0':
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        case 'MIT License':
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        case 'Boost Software License 1.0':
            return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
        case 'The Unlicense':
            return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
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