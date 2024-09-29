import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "./slicers/drawer";

const store = configureStore({
    reducer: {
        drawer: drawerSlice,
    },
});

export default store;
