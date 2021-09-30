import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HeaderCartButton = ({
    price = "0",
    currency = "€"
}) => {
    return (
        <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
            {price} {currency}
        </Button>
    )
}

HeaderCartButton.propTypes = {
    price: PropTypes.string,
    currency: PropTypes.string
}

export default HeaderCartButton
