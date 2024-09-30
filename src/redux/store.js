import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "./slicers/drawer";
import productsSlice from "./slicers/products";

const store = configureStore({
    reducer: {
        drawer: drawerSlice,
        products: productsSlice,
    },
});

export default store;
