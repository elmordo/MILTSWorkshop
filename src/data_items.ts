
export class TodoItem
{

    static _nextId: number = 1;

    public subject: string;

    public note: string;

    public isFinished: boolean;

    private _id: number;

    private _createdAt: Date;

    constructor()
    {
        this._id = TodoItem._nextId++;
        this._createdAt = new Date();
        this.subject = "";
        this.note = "";
        this.isFinished = false;
    }

    get id(): number
    {
        return this._id;
    }

    get createdAt(): Date
    {
        // prevent from change
        return new Date(this._createdAt);
    }
}


export class ItemManager
{

    private _items: ItemIndex;

    constructor()
    {
        this._items = new ItemIndex();
    }

    public createItem(): TodoItem
    {
        let item: TodoItem = new TodoItem();
        this._items[item.id] = item;
        return item;
    }

    public removeItem(id: number): void
    {
        delete this._items[id];
    }

    public getItem(id: number): TodoItem
    {
        return this._items[id];
    }

    public getItems(): Array<TodoItem>
    {
        let items: Array<TodoItem> = new Array<TodoItem>();

        for (let id in this._items)
            items.push(this._items[id]);

        return items;
    }
}


export class ItemIndex
{
    [key: number]: TodoItem;
}
