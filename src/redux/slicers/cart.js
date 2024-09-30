import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
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
