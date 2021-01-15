const inquirer = require("inquirer")
const fs = require("fs")
inquirer.prompt([
  {
    type: "input",
    name:"username",
    message:"Enter your Github username: ",
  },
  {
    type: "input",
    name:"title",
    message:"Enter your project title: ",
  },
  {
    type: "input",
    name:"discription",
    message:"Enter short project discription: ",
  },
  {
    type: "input",
    message: "Enter the installation process: ",
    name: "installation"
},
{
    type: "input",
    message: "Enter the usage of the project: ",
    name: "usage"

},
{
    type: "input",
    message: "Enter licenses used for the project: ",
    name: "licenses"
},
{
    type: "input",
    message: "Enter contributing information: ",
    name: "contribute"

}, {
    type: "input",
    message: "Enter any tests you are running for your project: ",
    name: "tests"
}


])