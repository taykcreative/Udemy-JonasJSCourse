let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

let markBMI =  massMark / (heightMark * heightMark);
let johnBMI =  massJohn / (heightJohn * heightJohn);

console.log (`Mark's BMI is ${markBMI}.`);
console.log (`John's BMI is ${johnBMI}.`);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`John's BMI is higher than Mark's`);
}