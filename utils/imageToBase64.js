const fs = require('fs');

const imageToBase64 = (file) => {
    const bitmap = fs.readFileSync(file, 'base64');
    return bitmap;
};

module.exports = imageToBase64;