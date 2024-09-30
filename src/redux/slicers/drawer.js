import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    drawer: { type: "drawer", payload: false },
};

export const drawerSlice = createSlice({
    name: "drawer",
    initialState,
    reducers: {
        showDrawer: (state, action) => {
            if (action) {
                state.drawer = { ...state.drawer, payload: action.payload };
            }
            state.drawer = { ...state.drawer, payload: !state.drawer.payload };
        },
    },
});

export const { showDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
