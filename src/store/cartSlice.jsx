import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(product) {
                return {
                    payload: {
                        ...product,
                        cartItemId: nanoid() // unique ID for each cart entry
                    }
                }
            }
        },
        remove(state, action) {
            const index = state.findIndex(item => item.cartItemId === action.payload);
            if (index >= 0) {
                state.splice(index, 1); // removes only this specific item
            }
        }
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;