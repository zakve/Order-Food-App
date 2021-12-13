import { createStore, Store } from 'redux'
import { IItem, CartState, CartAction, DispatchType } from '../types'
import * as actionTypes from "./actionTypes"

export const defaultCartState: CartState = {
    items: [],
    totalAmount: 0
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
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.count
            return {
                ...state,
                items: state.items.concat(newItem),
                totalAmount: updatedTotalAmount
            }
        case actionTypes.REMOVE_ITEM:
            const updatedItems: IItem[] = state.items.filter(
                item => item.id !== action.item.id
            )
            const reducedTotalAmount = state.totalAmount - action.item.price * action.item.count
            return {
                ...state,
                items: updatedItems,
                totalAmount: reducedTotalAmount
            }
    }
    return state
}

const store: Store<CartState, CartAction> & {
    dispatch: DispatchType
} = createStore(appReducer)

export default store