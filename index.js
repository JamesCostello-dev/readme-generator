'use strict';

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const data = async () => {
  await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title of the project.',
      validate: title => {
        if (title) {
          return true;
        } else {
          console.log('Enter the project title.')
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
      name: 'tech',
      message: 'What tech did you use?',
      validate: tech => {
        if (tech) {
          return true;
        } else {
          console.log('Please enter the tech used for this app.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List all contributors',
      validate: credits => {
        if (credits) {
          return true;
        } else {
          console.log('Please enter all contributors involved with this porject.')
          return false;
        }
      }
    },
    {
      message: 'Dont forget to add your media files!',
    },
  ]);
};

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

data()
  .then(generateMarkdown)
  .then(writeToFile)
  .then(err => {
    throw err;
  });