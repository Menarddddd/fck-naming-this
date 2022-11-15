const path = require('path');
console.log(path.sep);

const fp = path.join('\content', 'subfolder', 'test.txt');
console.log(fp);

console.log(path.basename(fp));

const abs = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(abs);