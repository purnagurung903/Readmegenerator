const inquirer = require("inquirer")
const fs = require("fs")
inquirer.prompt([
  {
    type: "input",
    name: "username",
    message: "Enter your Github username: ",
  },
  {
    type: "input",
    name: "title",
    message: "Enter your project title: ",
  },
  {
    type: "input",
    name: "description",
    message: "Enter short project description: ",
  },
  {
    type: "input",
    message: "Enter the installation process: ",
    name: "installation"
  },
  {
    type: "input",
    message: "Enter the usage of the project: ",
    name: "usages"

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


]).then((response) => {
  const data =
  {
    name: response.name,
    username: response.username,
    url: response.html_url,
    title: response.title,
    description: response.description,
    installation: response.installation,
    usages: response.usages,
    licenses: response.licenses,
    tests: response.tests,
    contribute: response.contribute,
    email: response.email,
    pfp: response.avatar_url

  }
  console.log(data)
  // var markDown = "# " + data.title
  var markDown = `# ${data.title}\n
  ## Description \n
  ${data.description}\n
  ## Table of Contents\n
  * [Installation](#installation)
  * [Usages](#usages)
  * [Contribute](#contribute)
  * [License](#license)
  * [tests](#tests)
  ## Installation\n
  ${data.installation}\n
  ## Usages

  ${data.usages}\n
  ## tests 
  ${data.tests}\n
  ## Contribute
  ${data.contribute}\n
  ## License
  ${data.licenses}
  
  
  `
  fs.writeFile("README.md", markDown, function (error) {
    error ? console.error(error) : console.log('successfully wrote README')
  })
})


