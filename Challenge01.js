let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

let markBMI =  massMark / (heightMark * heightMark);
let johnBMI =  massJohn / (heightJohn * heightJohn);

let markHigherBMI;

if (markBMI > johnBMI) markHigherBMI = true;

console.log ("Mark's BMI is " + markBMI + ".");
console.log ("John's BMI is " + johnBMI + ".");
console.log ("Is Mark's BMI higher than John's BMI?");
console.log (markHigherBMI);
