const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please, provide a description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are your installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is your project usage?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are your contribution guidelines?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What are your test instructions?",
    name: "test",
  },
  {
    type: "list",
    message: "What is your project license?",
    name: "license",
    choices: ["MIT", "Apache", "GPL", "IBM", "ISC", "Mozilla", "Unlicense"],
  },
];

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (userResponse) {
    const data = writeToFile(userResponse);
    fs.writeFile("README.md", data, function () {
      console.log("success");
    });
  });
}

// function to write README file
function writeToFile(userObj) {
  return ` ### **${userObj.title}**
  
  ## Description 
  ${userObj.description}

  ## Table of contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributors](#Contributors)
  * [Test](#Test)
  * [GitHub Info](#Questions) 
  
  ## Installation
  ${userObj.installation}
  
  ## Usage
  ${userObj.usage}

  ## License
  ![License](https://img.shields.io/badge/LICENSE-${userObj.license}-GREEN)
  
  ## Contributors
  ${userObj.contributing}
  
  ## Test
  ${userObj.test}
  
  ## Questions
  For questions contact ${userObj.email}.
  GitHub URL: https://api.github.com/users/${userObj.username}
  `;
}

// function call to initialize program
init();
