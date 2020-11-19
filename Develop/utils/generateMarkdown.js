'use strict '

// function to generate markdown for README
const generateMarkdown = questions =>
  `# ${questions.title}
\n\
## Description
\n\
${questions.description}
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
${questions.installation}
\n\
## Usage
\n\
${questions.usage}
\n\
## Credits
\n\
${questions.credits}
\n\
## License 
\n\
${questions.license}
\n\
## Tests
\n\
${questions.tests}
\n\
## Questions
\n\
${tests}
`;

module.exports = generateMarkdown;