
function myFunc(): void
{
    console.log("This function does not accept any argument and returns nothing");
}

function add(x: number, y: number): number
{
    // typed function must have the "return" statement
    return x + y;
}

function printSomething(someVal: any): void
{
    console.log("We can use 'any' keyword to mark argument as untyped.", someVal);
}

myFunc();

let result: number = add(1, 2);
console.log("Result of 1 + 2 is:", result)

printSomething("prdel");
printSomething(666);
