import { useContext } from 'react'
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
//import Hidden from '@mui/material/Hidden';
import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';

import Header from './components/Layout/Header';
import MealItem from "./components/Meals/MealItem";
//import shoppingBagImage from "./assets/images/shoppingBag.png";
import CartContext from './store/CartContext'

const DUMMY_MEALS = [
  { id: "1", title: 'Fresh salad', price: 15, count: 1, image: 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
  { id: "2", title: 'Norweigan Bacon', price: 35, count: 1, image: 'https://images.unsplash.com/photo-1528607929212-2636ec44253e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' },
  { id: "3", title: 'Gouda', price: 20, count: 1, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80' },
  { id: "4", title: 'Chicken legs', price: 55, count: 2, image: 'https://images.unsplash.com/photo-1588767768106-1b20e51d9d68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' }
];

function App() {
  const cartContext = useContext(CartContext)
  const classes = useStyles();
  console.log(cartContext)
  cartContext.addItem({ id: "kf", title: "s", price: 20, count: 2, image: "fkdsl" })

  return (
    <Container className={classes.main}>
      <Header />
      <Grid container>
        <Grid item sm={10} xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Paper elevation={0} className={classes.paper}>
                <Grid container>
                  <Grid item sm={8} xs={12}>
                    {/* <List list={list} onRemoveClick={removeFromListHandler} />
                    <div className={classes.price}>
                      <p>Total: {totalPrice}</p>
                      <Button variant="contained" color="secondary">
                        ORDER NOW
                      </Button>
                    </div> */}
                  </Grid>
                  {/* <Hidden xsDown>
                    <Grid item sm={4} xs={12} className={classes.imageContainer}>
                      <img src={shoppingBagImage} alt='shoppingBag' className={classes.image} />
                    </Grid>
                  </Hidden> */}
                </Grid>
              </Paper>
            </Grid>
            {
              DUMMY_MEALS.map((meal, i) =>
                <Grid key={i} item md={3} sm={4} xs={6}>
                  <Paper elevation={0}>
                    <MealItem
                      id={meal.id}
                      title={meal.title}
                      price={meal.price}
                      image={meal.image}
                      onAddClick={() => cartContext.addItem({ id: "kf", title: "s", price: 20, count: 2, image: "fkdsl" })}
                    />
                  </Paper>
                </Grid>
              )}
          </Grid>
        </Grid>
        <Grid item sm={2} xs={12}>
          <Paper elevation={0}><Typography>Past Orders</Typography></Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 30
  },
  paper: {
    background: grey[100],
    borderRadius: 10,
    color: 'black',
    padding: '30px',
  },
  price: {
    textAlign: "right"
  },
  image: {
    width: '100%',
  },
  imageContainer: {
    marginTop: -100,
    alignItems: 'flex-start'
  },
  logo: {
    height: 50
  }
}));

export default App;
