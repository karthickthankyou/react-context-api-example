import { getProducts } from "../db"
import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_PRODUCTS } from "./constants"

export const fetchProducts = (dispatch) => async () => {
  const results = await getProducts()
  dispatch({
    type: FETCH_PRODUCTS,
    payload: results,
  })
}

export const addToCart = (dispatch) => (cartItem) => {
  console.log(cartItem)
  dispatch({
    type: ADD_TO_CART,
    payload: cartItem,
  })
}

export const removeFromCart = (dispatch) => (cartItemId) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: cartItemId,
  })
}
