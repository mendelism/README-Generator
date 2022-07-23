// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseShield(license) {
  if (license) {
    if (license === "No License") {
      return "";
    } else {
    return `[![GitHub license]${licenseShields[license]}`;
    }
  }
};

function renderLicenseSection(license) {
  if (license) {
    if (license === "No License") {
      return "This project is not licensed";
    } else {
    return `This project is licensed under the ${license} license.`;
    }
  }
};

const licenseShields = {
  "Apache 2.0": "(https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "Boost 1.0": "(https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  "BSD 3-Clause License": "(https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "BSD 2-Clause License": "(https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  "Eclipse Public License 1.0": "(https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  "GNU GPL v2": "(https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  "GNU GPL v3": "(https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "GNU AGPL v3": "(https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
  "GNU LGPL v3": "(https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
  "GNU FDL v1.3": "(https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)",
  "IBM Public License Version 1.0": "(https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
  "ISC": "(https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
  "MIT": "(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "Mozilla Public License 2.0": "(https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  "The Perl License": "(https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  "The Unlicense": "(https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  "No License": "",
  "The zlib/libpng License": "(https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseShield = renderLicenseShield(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

  ${licenseShield}
  
  ## Description
  
  ${data.description}
  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)
  
  
  ## Installation
  
  To install dependencies, run the following command:
  \`\`\`
  ${data.install}
  \`\`\`
  
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${licenseSection}
  
  
  ## Contributing
  
  ${data.contributing}
  
  
  ## Testing
  
  To run tests, run the following command:
  \`\`\`
  ${data.tests}
  \`\`\`
  
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = { generateMarkdown };
