import { createStore, Store } from 'redux'
import { IItem, CartState, CartAction, DispatchType } from '../types'
import * as actionTypes from "./actionTypes"

export const defaultCartState: CartState = {
    items: [
        { id: "1", title: 'Fresh salad', price: 15, count: 1, image: 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' }
    ],
    totalAmount: 100
}


const appReducer = (state: CartState = defaultCartState, action: CartAction) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            const newItem: IItem = {
                id: Math.random().toString(), // not really unique
                title: action.item.title,
                price: action.item.price,
                count: action.item.count,
                image: action.item.image
            }
            return {
                ...state,
                articles: state.items.concat(newItem),
            }
        case actionTypes.REMOVE_ITEM:
            const updatedItems: IItem[] = state.items.filter(
                item => item.id !== action.item.id
            )
            return {
                ...state,
                items: updatedItems,
            }
    }
    return state
}

const store: Store<CartState, CartAction> & {
    dispatch: DispatchType
} = createStore(appReducer)

export default store