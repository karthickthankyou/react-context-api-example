import React, { useContext } from "react"
import Button from "@material-ui/core/Button"

import { centsToDollar } from "../util"

import { GlobalContext } from "../context/ContextProvider"

function PayButton() {
  const {
    state: { cartItems },
  } = useContext(GlobalContext)
  return (
    <Button fullWidth size="large" variant="contained" color="primary">
      PAY
      {centsToDollar(cartItems.reduce((total, item) => total + item.price, 0))}
    </Button>
  )
}

export default PayButton
