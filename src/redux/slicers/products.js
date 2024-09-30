import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    return data;
});

const initialState = {
    products: null,
    status: "null",
    error: null,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload;
                console.log(state.products);
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

// export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
