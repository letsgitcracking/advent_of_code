const fs = require('fs');
let text = fs.readFileSync('./input.txt').toString();
let totalFuel = [];

let textByLine = (text.split('\r\n'))
    .map(Number).map(value => calculateFuel(value));


function calculateFuel(input) {
    let inputList = [];
    var currentFuel;
    currentFuel = Number(Math.floor(input / 3) - 2);
    inputList.push(currentFuel);
    while (currentFuel >= 0) {
        currentFuel = Number(Math.floor(currentFuel / 3) - 2);
        if (currentFuel >= 0) {
            inputList.push(currentFuel);
        };
    }
    totalInputList = inputList.reduce((acc, val) => {
        totalInputList = acc + val;
        return totalInputList
    })
    totalFuel.push(totalInputList);
};

totalFuel = totalFuel.reduce((acc, val) => acc + val);
console.log(totalFuel);

//answer = 4954710;