import React, { createContext, useReducer } from "react"
import Reducer from "./reducer"
import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_PRODUCTS } from "./constants"

import { getProducts } from "../db"

const initialState = {
  products: [],
  cartItems: [],
}

export const GlobalContext = createContext(initialState)
const { Provider } = GlobalContext

export default ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  const fetchProducts = async () => {
    const results = await getProducts()
    dispatch({
      type: FETCH_PRODUCTS,
      payload: results,
    })
  }

  const addToCart = (cartItem) => {
    console.log(cartItem)
    dispatch({
      type: ADD_TO_CART,
      payload: cartItem,
    })
  }
  const removeFromCart = (cartItemId) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: cartItemId,
    })
  }

  return (
    <Provider
      value={{ state, action: { fetchProducts, addToCart, removeFromCart } }}
    >
      {children}
    </Provider>
  )
}
