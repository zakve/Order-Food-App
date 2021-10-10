import React from 'react'
import { IItem, ICartContext } from '../common/types'

const defaultState = {
    items: [],
    totalAmount: 0,
    addItem: (item: IItem) => { },
    removeItem: (id: number) => { }
}

const CartContext = React.createContext<ICartContext>(defaultState)

export default CartContext