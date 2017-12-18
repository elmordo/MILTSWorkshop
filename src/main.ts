
let myNumber: number = 50;
let myDouble: number = 3.1415;
let myString: string = "prdel";
const myConst: string = "konstantni prdel";

let numberArray: Array<number> = new Array<number>();

for (let i: number = 0; i < 10; ++i)
    numberArray.push(i);

console.log(myNumber, myDouble, myString, numberArray, myConst);

let otherString: string = myString;
otherString += " smradlava";

console.log(myString, otherString);

let otherArray: Array<number> = numberArray;
otherArray.push(666);

console.log(numberArray, otherArray);

// following line is invalid - we cannot assign to the constants
//myConst = "nope nope nope"
