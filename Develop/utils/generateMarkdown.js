'use strict '

// function to generate markdown for README
const generateMarkdown = data =>
  `# ${data.title}
\n\
## Description
\n\
${data.description}
\n\
## Table of Contents
\n\
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
\n\
## Installation
\n\
${data.installation}
\n\
## Usage
\n\
${data.usage}
\n\
## Credits
\n\
${data.credits}
\n\
## License 
\n\
${data.license}
\n\
## Tests
\n\
${data.tests}
\n\
## Questions
\n\
https://github.com/${data.questions}
\n\
Email: ${data.email}
`;

module.exports = generateMarkdown;