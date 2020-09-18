import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_PRODUCTS } from "./constants"
import produce from "immer"

export default (state, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload }
      break
    case ADD_TO_CART:
      return produce(state, (draftState) => {
        draftState.cartItems.push(action.payload)
      })
    case REMOVE_FROM_CART:
      return produce(state, (draftState) => {
        draftState.cartItems = draftState.cartItems.filter(
          (item) => item.id !== action.payload
        )
      })
    default:
      break
  }
}
