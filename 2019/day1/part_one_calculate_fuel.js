const fs = require('fs');

let text = fs.readFileSync('./input.txt').toString();

let textByLine = (text.split('\r\n'))
    .map(Number)
    .map(value => Math.floor(value / 3) - 2)
    .reduce( (acc, val) => acc + val);

    //answer part one = 3305041;

console.log(textByLine);
