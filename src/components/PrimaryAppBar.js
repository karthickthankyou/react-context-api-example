import React, { useContext } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import AccountCircle from "@material-ui/icons/AccountCircle"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

import { GlobalContext } from "../context/ContextProvider"

export default function PrimaryAppBar() {
  const {
    state: { cartItems },
  } = useContext(GlobalContext)
  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <Typography variant="h6" noWrap>
            React Context API Sample
          </Typography>

          <div style={{ flexGrow: 1 }} />
          <div>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={cartItems.length} color="secondary">
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
