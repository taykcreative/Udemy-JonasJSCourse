// Remember, we're gonna use strict mode in all scripts now!
'use strict';

let dolphinsScore1 = 97;
let dolphinsScore2 = 112;
let dolphinsScore3 = 101;

let koalasScore1 = 109;
let koalasScore2 = 95;
let koalasScore3 = 106;

let dolphinAvg = Average (dolphinsScore1, dolphinsScore2, dolphinsScore3);
let koalaAvg = Average(koalasScore1, koalasScore2, koalasScore3);

function Average(num1, num2, num3) {
    let average = (num1 + num2 + num3) / 3;
    return average;
}

console.log(`Dolphins have an average of ${dolphinAvg}`);
console.log(`Koalas have an average of ${koalaAvg}`);

if(dolphinAvg > koalaAvg && dolphinAvg >= 100) {
    console.log('Dolphins win!');
}   else if(koalaAvg > dolphinAvg && koalaAvg >= 100) {
    console.log('Koalas win!');
}   else {
    console.log('TIE!');
}