import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice';
import productSlice from './productSlice';
import progressSlice from './progressSlice'

const store = configureStore({
    reducer : {
        cart: cartSlice,
        products: productSlice,
        progress: progressSlice
    }
});

export default store;