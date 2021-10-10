import React from 'react'
import CartContext from './CartContext'
import { IItem } from '../common/types'

type Props = {
    children: React.ReactNode
};

const CartProvider = ({ children }: Props) => {
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: (item: IItem) => { },
        removeItem: (id: number) => { }
    }

    return <CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>
}

export default CartProvider