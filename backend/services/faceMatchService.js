const { exec } = require("child_process");

const runFaceMatch = (imagePath) => {
  return new Promise((resolve, reject) => {
    exec(`python python/match.py ${imagePath}`, (err, stdout) => {
      if (err) {
        return reject(err);
      }

      try {
        const result = JSON.parse(stdout);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  });
};

module.exports = { runFaceMatch };