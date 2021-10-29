const array = ["Apache License 2.0", "MIT", "Mozilla Public License 2.0"];

function renderBadge(license) {
    if (license == array[0]) {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license == array[1]) {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (license == array[2]) {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
}

function renderLink(license) {
    if (license == array[0]) {
        return `[${array[0]}](https://opensource.org/licenses/Apache-2.0)`
    } else if (license == array[1]) {
        return `[${array[1]}](https://opensource.org/licenses/MIT)`
    } else if (license == array[2]) {
        return `[${array[2]}](https://opensource.org/licenses/MPL-2.0)`
    }
}

function renderSection(license) {
    if (license == array[0]) {
        return `Link to ${array[0]} below:`
    } else if (license == array[1]) {
        return `Link to ${array[1]} below:`
    } else if (license == array[2]) {
        return `Link to ${array[2]}:`
    }
}

function markDown(data) {
    return `# ${data.title}
  

## Description
${data.description}

${renderBadge(data.license)}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## contributing
${data.contributing}

## Testing
${data.testing}

## Questions
  For any questions contact me at:
  GitHub: [${data.username}](${data.profile})
  email: ${data.email}

## License
${renderSection(data.license)}
${renderLink(data.license)}
`;
}

module.exports = markDown;