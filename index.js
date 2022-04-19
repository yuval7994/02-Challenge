// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs")
const inquirer = require("inquirer")


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of the project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions of the project?",
  },

  {
    type: "input",
    name: "usage",
    message: "What is the usage information of the project?",
  },

  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines of the project?",
  },

  {
    type: "input",
    name: "tests",
    message: "What are the test instructions of the project?",
  },
  {
    type: "list",
    name: "license",
    message: "What is the license for the project?",
    choices: ["Apache 2.0", "GNU GPLv3", "MIT"],
  },

{
    type: "input",
    name: "username", 
    message: "What is your Github Username?", 
},

    
{
    type: "input",
    name: "email", 
    message: "What is your email address?", 
}
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      return console.error(error)
    }
    console.log(`File Successfuly Created: ${fileName}`)
  })
}

// TODO: Create a function to initialize app

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const data = generateMarkdown(answers)
      writeToFile("readme-result.md", data)
    })
    .catch((error) => console.error(error))
}

// Function call to initialize app
init()
