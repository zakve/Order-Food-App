import { IItem } from '../types'

interface IState {
    items: Array<IItem>,
    totalAmount: number
}

export enum CartActionKind {
    Add = "ADD",
    Remove = "REMOVE"
}

type CartAction =
    | { type: CartActionKind.Add; item: IItem }
    | { type: CartActionKind.Remove; id: number }

export const defaultCartState: IState = {
    items: [],
    totalAmount: 0
}

export const cartReducer = (state: IState, action: CartAction) => {
    console.log(action)
    switch (action.type) {
        case CartActionKind.Add: {
            const updatedItems = state.items.concat(action.item)
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.count
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }
        default:
            return defaultCartState;
    }
}