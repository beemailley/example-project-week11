import { createSlice } from "@reduxjs/toolkit";

const productData = [
    {id: 1, title: 'Socks', price: 100, emoji: '🧦'},
    {id: 2, title: 'T-shirt', price: 200, emoji: '👕'},
    {id: 3, title: 'Pants', price: 350, emoji: '👖'},
    {id: 4, title: 'Dress', price: 550, emoji: '👗'}
]

export const products = createSlice({
    name: 'products',
    initialState: productData
})

// not creating any reducers here because the products array does not need to be updated
// making use of redux/slice to be able to access this data from any component