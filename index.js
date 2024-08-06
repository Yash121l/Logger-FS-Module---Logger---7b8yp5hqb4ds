const fs = require('fs');

// const content = 'Some content!';
// fs.writeFile('./logger.txt', content, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('File written successfully!');
//   }
// });


function logInfo(message) {
  const content = new Date().toISOString() + " | " + "INFO" + " | " + message
  fs.writeFile('./logs/app.log', content, err => {
    if (err) {
    } else {
    }
  })
}

function logWarning(message) {
  const content = new Date().toISOString() + " | " + "WARN" + " | " + message
  fs.writeFile('./logs/app.log', content, err => {
    if (err) {
    } else {
    }
  })
}



function logError(message) {
  const content = new Date().toISOString() + " | " + "ERROR" + " | " + message
  fs.writeFile('./logs/app.log', content, err => {
    if (err) {
    } else {
    }
  })
}

logInfo("This is an info message");
logWarning("This is a warning message");
logError("This is an error message");

module.exports = {
  logInfo,
  logWarning,
  logError,
};
