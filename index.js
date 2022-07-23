// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project:'
  },
  {
    type: 'input',
    name: 'install',
    message: 'How is your project installed?',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How are tests run?',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is your project used?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'How is your project licensed?',
    choices: ['No License', 'Apache 2.0', 'Boost 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'Eclipse Public License 1.0', 'GNU GPL v2', 'GNU GPL v3', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'IBM Public License Version 1.0', 'ISC', 'MIT', 'Mozilla Public License 2.0', 'The Perl License', 'The Unilicense', 'The zlib/libpng License']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can someone contribute to your project?'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readMeData = generateMarkdown(data);
  fs.writeFile(fileName, readMeData, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
};

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) => {
      writeToFile('README.md', response);
  });
}

// Function call to initialize app
init();
