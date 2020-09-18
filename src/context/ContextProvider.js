import React, { createContext, useReducer } from "react"
import Reducer from "./reducer"
import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_PRODUCTS } from "./constants"
import { addToCart, removeFromCart, fetchProducts } from "./actions"

import { getProducts } from "../db"

const initialState = {
  products: [],
  cartItems: [],
}

export const GlobalContext = createContext(initialState)
const { Provider } = GlobalContext

export default ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  const action = {
    addToCart: addToCart(dispatch),
    removeFromCart: removeFromCart(dispatch),
    fetchProducts: fetchProducts(dispatch),
  }

  return <Provider value={{ state, action }}>{children}</Provider>
}
