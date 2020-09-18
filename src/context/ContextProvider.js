import React, { createContext, useReducer } from "react"

const initialState = {
  products: [{ a: 0 }],
  cartItems: [],
}

export const GlobalContext = createContext(initialState)
const { Provider } = GlobalContext

export default ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => state, initialState)
  return <Provider value={{ state }}>{children}</Provider>
}
