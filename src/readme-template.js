module.exports = readmeData => {
    return `
    # ${readmeData.title}

    ## Description

    ${readmeData.description}

    ##Table of Contents

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

    Github: https://github.com/${readmeData.username}
    Email: ${readmeData.email}
    `;
};