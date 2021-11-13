import React, { useReducer } from 'react'
import CartContext from './CartContext'
import { cartReducer, defaultCartState, CartActionKind } from './reducers'
import { IItem } from '../types'

type Props = {
    children: React.ReactNode
};

const CartProvider = ({ children }: Props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item: IItem) => {
        console.log('ADD ITEM')
        console.log(item)
        dispatchCartAction({ type: CartActionKind.Add, item: item })
    }

    const removeItemFromCartHandler = (id: number) => {
        dispatchCartAction({ type: CartActionKind.Remove, id: id })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>
}

export default CartProvider