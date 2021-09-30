import React from 'react'

import buyMilkLogo from "../../assets/images/buyMilkLogo.png";
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={buyMilkLogo} alt='logo' className={classes.logo} />
            <HeaderCartButton price="0" currency="€" />
        </header>
    )
}

export default Header
