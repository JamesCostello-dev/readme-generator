'use strict '

// generate markdown
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
![Alt text](assets/img/screenshot.jpg "README Generator")
\n\
## Credits
\n\
${data.credits}
\n\
## License 
\n\
[![license](https://img.shields.io/badge/License-${data.license}-green.svg)](https://shields.io/)
\n\
## Tests
\n\
${data.tests}
\n\
## Questions
\n\
[Github Profile](https://github.com/${data.questions})
\n\
Have a question?  Send an [email](${data.email}).
`;

module.exports = generateMarkdown;