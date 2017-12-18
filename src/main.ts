
abstract class MyBaseClass
{
    public publicProp: string;

    private _x: number;

    readonly y: number;

    constructor(x: number, y: number)
    {
        this._x = x;
        this.y = y; // readonly members can be set in constructor only
    }

    public abstract calculate(): number;

    get x(): number { return this._x; }
    set x(val: number) { this._x = val; }
}


class MyChildClass extends MyBaseClass
{
    readonly z:number;

    constructor(x: number, y: number, z:number)
    {
        super(x, y); // WE HAVE TO CALL PARENT CLASS CONSTRUCTOR!
        this.z = z;
    }

    public calculate(): number
    {
        return this.x + this.y + this.z;
    }
}


class MySpecialClass extends MyChildClass
{
    public calculate(): number
    {
        return super.calculate() * 2;
    }
}


// we cannot do this - MyBaseClass is abstract
//let x: MyBaseClass = new MyBaseClass();

let childInstance: MyChildClass = new MyChildClass(1, 2, 3);
let specialInstance: MySpecialClass = new MySpecialClass(3, 4, 5);

let referenceToBase: MyBaseClass = specialInstance;

console.log("Result of the child instance is:", childInstance.calculate());
console.log("Result of the special instance is:", specialInstance.calculate());
console.log("Result of the base reference instance is:", referenceToBase.calculate());
