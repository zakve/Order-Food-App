import { CartAction, DispatchType, IItem } from "../types"
import * as actionTypes from "./actionTypes"

export function addItem(item: IItem) {
    const action: CartAction = {
        type: actionTypes.ADD_ITEM,
        item,
    }

    return simulateHttpRequest(action)
}

export function removeItem(item: IItem) {
    const action: CartAction = {
        type: actionTypes.REMOVE_ITEM,
        item,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: CartAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 2000)
    }
}