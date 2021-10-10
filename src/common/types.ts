export interface IItem {
    id: string;
    title: string;
    price: number;
    count: number;
    image: string
}

export interface ICartContext {
    items: Array<IItem>;
    totalAmount: number;
    addItem: (item: IItem) => void;
    removeItem: (id: number) => void;
}