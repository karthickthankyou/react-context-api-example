import React from "react"
import Button from "@material-ui/core/Button"

function PayButton({ amountToPay = 0 }) {
  return (
    <Button fullWidth size="large" variant="contained" color="primary">
      PAY ${amountToPay}
    </Button>
  )
}

export default PayButton
