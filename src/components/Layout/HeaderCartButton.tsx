import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface Header {
    price: string;
    currency: string;
}

const HeaderCartButton = ({ price = "0", currency = "€" }: Header) => {
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
