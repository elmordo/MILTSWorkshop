
export function myFunc()
{
    console.log("hello, this is exported myFunc");
    internalFunc();
}


function internalFunc(): void
{
    console.log("hi, this is internal funcion")
}


export class MyClass
{
    public print(): void
    {
        console.log("This is exported class method");
    }
}
