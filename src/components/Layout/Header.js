import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import buyMilkLogo from "../../assets/images/buyMilkLogo.png";
import classes from './Header.module.css'

const Header = ({
    price = "0",
    currency = "€"
}) => {
    return (
        <header className={classes.header}>
            <img src={buyMilkLogo} alt='logo' className={classes.logo} />
            <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
                {price} {currency}
            </Button>
        </header>
    )
}

Header.propTypes = {
    price: PropTypes.string,
    currency: PropTypes.string
}

export default Header
