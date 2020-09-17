import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CartCard from "./CartCard"
import PayButton from "./PayButton"

function Cart({ cartItems = [] }) {
  return (
    <Grid container>
      <Typography
        align="center"
        gutterBottom
        variant="h5"
        style={{ margin: "auto" }}
      >
        CART
      </Typography>

      {cartItems.map((cartItem) => (
        <Grid item xs={12} key={cartItem.id}>
          <CartCard title={cartItem.title} price={cartItem.price} />
        </Grid>
      ))}
      <PayButton amountToPay={0} />
    </Grid>
  )
}

export default Cart
