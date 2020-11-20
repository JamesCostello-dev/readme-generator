'use strict';


const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// questions and validation
const data = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Title of the project.',
        validate: title => {
          if (title) {
            return true;
          } else {
            console.log('Please enter the project title.')
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description of your project.',
        validate: description => {
          if (description) {
            return true;
          } else {
            console.log('Please enter a description of your project.')
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Install instructions.',
        validate: installation => {
          if (installation) {
            return true;
          } else {
            console.log('Please enter install instructions.')
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage instructions.',
        validate: usage => {
          if (usage) {
            return true;
          } else {
            console.log('Enter usage cases and/or examples.')
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators.',
        validate: credits => {
          if (credits) {
            return true;
          } else {
            console.log('Please enter all collaberators involved with this porject.')
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license.',
        choices: ['GPL', 'Apache', 'MIT'],
        default: ['Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.',
          'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.',
          'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
        ],
      },
      {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Would you like to add a tests section to your README?',
        default: true
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide tests for your application and provide examples on how to run them.',
        when: ({ confirmTest }) => {
          if (confirmTest) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Enter your github username',
        validate: questions => {
          if (questions) {
            return true;
          } else {
            console.log('Please enter your github username')
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
        validate: email => {
          if (email) {
            return true;
          } else {
            console.log('Please enter your email')
            return false;
          }
        }
      },
    ]);
};


// write function and resolve
const writeToFile = (data, err) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', data, err => {
      if (err) {
        reject(err)
        return;
      }

      resolve({
        ok: true,
        message: 'File Created!'
      });
    });
  });
};


// run and callbacks
data()
  .then(generateMarkdown)
  .then(writeToFile)
  .catch(err => {
    console.error(err);
  });