// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    "Apache 2.0":
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GNU GPLv3":
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  }
  if (license) {
    return licenseBadges[license]
  } else return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    "Apache 2.0": "https://spdx.org/licenses/Apache-2.0.html",
    "GNU GPLv3": "https://spdx.org/licenses/GPL-3.0-or-later.html",
    MIT: "https://spdx.org/licenses/MIT.html",
  }
  if (license) {
    return licenseLinks[license]
  } else return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const licenseLink = renderLicenseLink(license)
    return `This project uses a [${license}](${licenseLink}) license`
  } else return ""
}

function renderContact(userName, emailAddress) {
  return `- GitHub: ${userName} Link to my [GitHub](https://www.github.com/${userName})
  - Email: ${emailAddress}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## License 
  ${renderLicenseSection(data.license)}
  ## Contributing 
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions 
  ${renderContact(data.username, data.email)}

`
}

module.exports = generateMarkdown
