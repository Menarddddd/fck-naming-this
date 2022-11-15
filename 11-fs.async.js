const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) console.log(err);
    
    const first = result;
    readFile('./content/first.txt', 'utf-8', (err ,result) => {
        if (err) console.log(err);
        return
    })
    const second = result;
    writeFile('./content/result-async.txt', 
    'whats up',
    //Optional param if flag: 'a' it will append the text if not override it,
    (err, result) => {
        if (err) {
            console.log(error);
            return
        }
        console.log(result)
    }
);
})