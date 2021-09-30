import React from 'react'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Add } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

interface MealItemProps {
    id: string,
    image: string,
    title: string,
    price: number,
    onAddClick: () => void
}

const MealItem = ({ id, image, title, price = 0, onAddClick }: MealItemProps) => {
    const classes = useStyles();

    return (
        <div id={id} className={classes.container}>
            <img className={classes.media} src={image} alt={title} />
            <div className={classes.row}>
                <div>
                    <Typography variant="body2" color="textSecondary" component="p">{title}</Typography>
                    <Typography>{price}&nbsp;€</Typography>
                </div>
                <IconButton aria-label="Add" color="secondary" onClick={onAddClick}>
                    <Add color="secondary" />
                </IconButton>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    container: {
        alignItems: 'center',
        border: '1px solid',
        borderColor: grey[100],
        borderRadius: 10,
        padding: '10px',
    },
    media: {
        width: '100%',
        height: 140,
        objectFit: 'cover'
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default MealItem
