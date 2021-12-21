import { useEffect, useState } from 'react'
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
//import Hidden from '@mui/material/Hidden';
import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';
import { useDispatch } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import Header from './components/Layout/Header';
import MealItem from "./components/Meals/MealItem";
import { ADD_ITEM } from './store/actionTypes';
import { IItem } from './types';
//import shoppingBagImage from "./assets/images/shoppingBag.png";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch()

  const [meals, setMeals] = useState<IItem[]>([])
  const [mealsLoading, setMealsLoading] = useState(false)

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setMealsLoading(true)
        const response = await fetch('https://order-food-77183-default-rtdb.europe-west1.firebasedatabase.app/meals.json')
        const responseData = await response.json()

        const loadedMeals: IItem[] = []
        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            title: responseData[key].title,
            price: responseData[key].price,
            count: 1,
            image: responseData[key].image
          })
        }

        setMeals(loadedMeals)
      } catch (error) {
        console.log(error)
        throw error
      } finally {
        setMealsLoading(false)
      }
    }

    fetchMeals()
  }, [])

  const addItemHandler = (item: IItem) => {
    dispatch({ type: ADD_ITEM, item })
  }

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
              mealsLoading &&
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            }
            {
              !mealsLoading && meals.map((meal, i) =>
                <Grid key={i} item md={3} sm={4} xs={6}>
                  <Paper elevation={0}>
                    <MealItem
                      item={meal}
                      onAddClick={addItemHandler}
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
