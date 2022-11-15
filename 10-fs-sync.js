const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'UTF-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync('./content/result.txt', 
    'asdasd',
    //Optional param if flag: 'a' it will append the text if not override it
);