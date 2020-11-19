'use strict';

const inquirer = require('inquirer');


// // array of questions for user
const questions = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Title of the project',
        validate: title => {
          if (title) {
            return true;
          } else {
            console.log('Please enter title')
            return false;
          }
        }
      }
    ]);
};

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
questions();