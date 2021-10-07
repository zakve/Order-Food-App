import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
interface HeaderCartButtonProps {
    price: string;
    currency: string;
}

const HeaderCartButton = ({ price = "0", currency = "€" }: HeaderCartButtonProps) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button
                onClick={handleOpen}
                variant="outlined"
                startIcon={<ShoppingCartIcon />}
            >
                {price} {currency}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Your Cart"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {/* <List>
                            <ListItem>
                                <ListItemText id='dialogText' primary={`sushi`} />
                                <IconButton edge="end" aria-label="comments">
                                    <ShoppingCartIcon />
                                </IconButton>
                            </ListItem>
                        </List> */}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleClose} autoFocus>
                        Order
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default HeaderCartButton
