import React, { useContext } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CartCard from "./CartCard"
import PayButton from "./PayButton"

import { GlobalContext } from "../context/ContextProvider"

function Cart() {
  const {
    state: { cartItems },
  } = useContext(GlobalContext)
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
          <CartCard cartItem={cartItem} />
        </Grid>
      ))}
      <PayButton amountToPay={0} />
    </Grid>
  )
}

export default Cart
