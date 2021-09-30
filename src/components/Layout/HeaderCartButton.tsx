import React from 'react'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface HeaderCartButtonProps {
    price: string;
    currency: string;
}

const HeaderCartButton = ({ price = "0", currency = "€" }: HeaderCartButtonProps) => {
    return (
        <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
            {price} {currency}
        </Button>
    )
}

export default HeaderCartButton
