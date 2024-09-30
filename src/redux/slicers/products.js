import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    return data;
});
export const fetchSingleProduct = createAsyncThunk(
    "fetchSingleProduct",
    async (id) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log(data);
        return data;
    }
);

const initialState = {
    products: [],
    singleProduct: {},
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

        builder
            .addCase(fetchSingleProduct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.singleProduct = action.payload;
                console.log(state.singleProduct);
            })
            .addCase(fetchSingleProduct.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

// export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
