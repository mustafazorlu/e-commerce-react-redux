import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "./slicers/drawer";
import productsSlice from "./slicers/products";
import cartSlice from "./slicers/cart";

const store = configureStore({
    reducer: {
        drawer: drawerSlice,
        products: productsSlice,
        singleProduct: productsSlice,
        cart: cartSlice,
    },
});

export default store;
