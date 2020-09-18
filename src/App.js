import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import "./App.css"

import PrimaryAppBar from "./components/PrimaryAppBar"
import Products from "./components/Products"
import Cart from "./components/Cart"

import { getProducts } from "./db"

import ContextProvider from "./context/ContextProvider"

const useStyles = makeStyles({
  p10: {
    padding: "6px",
  },
})

function App() {
  const classes = useStyles()
  const [products, setProducts] = useState([])
  useEffect(async () => {
    const results = await getProducts()
    setProducts(results)
  }, [])
  return (
    <ContextProvider>
      <PrimaryAppBar />
      <Grid container>
        <Grid item xs={9} className={classes.p10}>
          <Products products={products} />
        </Grid>
        <Grid item xs={3} className={classes.p10}>
          <Cart />
        </Grid>
      </Grid>
    </ContextProvider>
  )
}

export default App
