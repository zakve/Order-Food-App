interface IItem {
    id: string;
    title: string;
    price: number;
    count: number;
    image: string
}

type CartState = {
    items: Array<IItem>,
    totalAmount: number
}

type CartAction = {
    type: string,
    item: IItem
}

type DispatchType = (args: CartAction) => CartAction

export interface ICartContext {
    items: Array<IItem>;
    totalAmount: number;
    addItem: (item: IItem) => void;
    removeItem: (id: number) => void;
}