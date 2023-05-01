import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


// create username slice
export const usernameSlice = createSlice({
    name: "username",
    initialState: {
        value: "haziq-bangash",
    },
    reducers: {
        changeUsername: (state, action) => {
            state.value = action.payload;
        },
    },
});

// create dark mode slice
export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: {
        value: false,
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.value = !state.value;
        },
    },
});

// create store
export const store = configureStore({
    reducer: {
        username: usernameSlice.reducer,
        darkMode: darkModeSlice.reducer,
    },
});

// export actions
export const { changeUsername } = usernameSlice.actions;
export const { toggleDarkMode } = darkModeSlice.actions;

// export default the store 
export default store

// define RootState type
export type RootState = ReturnType<typeof store.getState>;