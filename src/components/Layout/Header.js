import React from 'react'
import PropTypes from 'prop-types'

import buyMilkLogo from "../../assets/images/buyMilkLogo.png";
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = ({
    price,
    currency
}) => {
    return (
        <header className={classes.header}>
            <img src={buyMilkLogo} alt='logo' className={classes.logo} />
            <HeaderCartButton
                price={price}
                currency={currency}
            />
        </header>
    )
}

Header.propTypes = {
    price: PropTypes.string,
    currency: PropTypes.string
}

export default Header
