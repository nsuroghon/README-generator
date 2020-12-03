const inquirer = require("inquirer");
const fs = require("fs");

const questions = inquirer
  .prompt([
    //title
    {
      type: "input",
      message: "Enter a project title",
      name: "title",
    },
    //description
    {
      type: "input",
      message: "Enter a project description",
      name: "description",
    },
    //installation instructions
    {
      type: "input",
      message: "What are this project's installation instructions?",
      name: "installation",
    },
    //usage information
    {
      type: "input",
      message: "What is the usage purpose of this project?",
      name: "usage",
    },
    //contribution guidelines
    {
      type: "input",
      message: "Who contributed in creating this project?",
      name: "contribution",
    },
    //test instructions
    {
      type: "input",
      message: "What are the test instructions?",
      name: "tests",
    },
    //License (DROPDOWN OPTION)
    {
      type: "checkbox",
      message: "Select a license",
      choices: ["MIT", "Apache"],
      name: "license",
    },
    //username
    {
      type: "input",
      message: "Enter your github username?",
      name: "username",
    },
    //email address
    {
      type: "input",
      message: "Enter your email address",
      name: "email",
    },
  ])
  .then(function (data) {
    fs.writeFile("readme.md",
    // pass on info to file
    `
    # ${data.title}

    ## Table of Contents
    * [App Description](#description)
    * [Installation Guide](#installation)
    * [Usage Information](#usage)
    * [Contributions](#contribution)
    * [Application Test](#tests)
    * [License](#license)

    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contribution
    ${data.contribution}

    ## Test
    ${data.tests}

    ## License
    ${data.license}

    ## More Info
    Github: ${data.username}
    Email: ${data.email}
    `,
    //callback function
     function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  });

  //formatted with extension prettier, cmd shift p 


