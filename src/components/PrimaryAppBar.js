import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import AccountCircle from "@material-ui/icons/AccountCircle"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
}))

export default function PrimaryAppBar() {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" noWrap>
            React Context API Sample
          </Typography>

          <div className={classes.grow} />
          <div>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton edge="end" color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}
