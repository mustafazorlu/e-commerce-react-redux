import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: JSON.parse(localStorage.getItem("cart")) || [],
        total: 0,
    },
    reducers: {
        addCart: (state, action) => {
            const existItem = state.cart.find(
                (item) => item.id === action.payload.id
            );
            console.log(existItem);
            if (existItem) {
                existItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeCart: () => {
            // const deleteItem = state.cart;
        },
    },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
