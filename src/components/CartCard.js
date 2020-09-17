import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import { centsToDollar } from "../util"

export default function ProductCard({ title, price }) {
  return (
    <Grid
      container
      style={{
        backgroundColor: "#fff",
        padding: "6px",
        margin: "6px 0",
        borderRadius: "4px",
      }}
    >
      <Grid item xs={9}>
        <Typography variant="h5" component="p">
          {title}
        </Typography>

        <Typography variant="subtitle1" component="p">
          {centsToDollar(price)}
        </Typography>
      </Grid>

      <Grid container item xs={3} justify="flex-end">
        <Button size="small" color="primary">
          Remove
        </Button>
      </Grid>
    </Grid>
  )
}
