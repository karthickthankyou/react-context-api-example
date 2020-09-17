import React from "react"
import Grid from "@material-ui/core/Grid"
import ProductCard from "./ProductCard"

function Products({ products = [] }) {
  return (
    <Grid container>
      {products.map((product) => (
        <Grid item xs={3} key={product.id}>
          <ProductCard title={product.title} price={product.price} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Products
