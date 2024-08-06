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
  fs.appendFileSync( './logs/app.log' , new Date().toISOString() + " | " + "INFO" + " | " + message +"\n")
}

function logWarning(message) {
  fs.appendFileSync( './logs/app.log' , new Date().toISOString() + " | " + "WARNING" + " | " + message +"\n")
}

function logError(message) {
  fs.appendFileSync( './logs/app.log' , new Date().toISOString() + " | " + "ERROR" + " | " + message +"\n")
}

logInfo("This is an info message");
logWarning("This is a warning message");
logError("This is an error message");

module.exports = {
  logInfo,
  logWarning,
  logError,
};
