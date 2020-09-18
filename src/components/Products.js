import React, { useContext, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import ProductCard from "./ProductCard"

import { GlobalContext } from "../context/ContextProvider"

function Products() {
  const {
    state: { products },
    action: { fetchProducts },
  } = useContext(GlobalContext)

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <Grid container>
      {products.map((product) => (
        <Grid item xs={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Products
