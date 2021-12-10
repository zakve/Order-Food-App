import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, Badge, DialogTitle, List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';

interface HeaderCartButtonProps {
    price: number;
    currency: string;
    cartItems: number;
}

const HeaderCartButton = ({ price = 0, currency = "€", cartItems = 0 }: HeaderCartButtonProps) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { };
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button
                onClick={handleOpen}
                variant="outlined"
                startIcon={
                    <Badge
                        badgeContent={cartItems}
                        color="secondary"
                    >
                        <ShoppingCartIcon />
                    </Badge>
                }
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
                    <List>
                        <ListItem
                            disableGutters
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <ClearIcon />
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1588767768106-1b20e51d9d68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                            </ListItemAvatar>
                            <ListItemText id='dialogText' primary="Rustic Jerky Sušené maso habanero and lime" secondary="50g" />
                        </ListItem>
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button variant="contained" onClick={handleClose} autoFocus>
                        Order
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default HeaderCartButton
