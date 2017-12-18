
interface MyInterface
{

    name: string;

    printName(): void;

}


class MyClass implements MyInterface
{

    public name: string;

    constructor(name: string)
    {
        this.name = name;
    }

    public printName(): void
    {
        console.log("Name is", this.name);
    }

}


class DifferentClass
{
    public name: string;

    constructor()
    {
        this.name = "some random feminazi";
    }

    public printName(): void
    {
        console.log("Hey", this.name);
    }
}


let myClassInstance: MyInterface = new MyClass("prdel");

myClassInstance.printName();

let otherInstance: MyInterface = new DifferentClass();
otherInstance.printName();
