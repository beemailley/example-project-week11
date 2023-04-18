/* eslint-disable max-len */
import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Products } from 'components/Products'
import { Cart } from 'components/Cart'
import { cart } from 'reducers/cart'
import { products } from 'reducers/products'

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

const store = configureStore({ reducer })

export const App = () => (
  <Provider store={store}>
    <Cart />
    <Products />
  </Provider>
)

// Need to make the store available to the app, in order to do that, must implement the following steps at a high level within the app.  Typically App.js
// Import Provider from react-redux & wrap all other components in <Provider /> component
// Provider takes a store prop, which will be the redux store (that we create)
// Import all reducers - here it's cart and products
// Need to do some things to the reducers in order to make them into a store
// Import configureStore and combineReducers from the redux toolkit
// Use combineReducers to define "reducer" as all available reducers - here it's cart and products
// Use configurestore to create the "store", pass "reducer: reducer" ("key: name of reducer") or just "reducer" as props if the reducer name is "reducer"
// Now that the store is created, can pass it as props to <Provider>
