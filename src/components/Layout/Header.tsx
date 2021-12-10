import React from 'react'
import { useSelector } from 'react-redux'

import buyMilkLogo from "../../assets/images/buyMilkLogo.png";
import { CartState } from '../../types';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    const cartItems = useSelector((state: CartState) => state)

    return (
        <header className={classes.header}>
            <img src={buyMilkLogo} alt='logo' className={classes.logo} />
            <HeaderCartButton price={cartItems.totalAmount} currency="€" cartItems={cartItems.items.length} />
        </header>
    )
}

export default Header
