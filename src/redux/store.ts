import { configureStore } from "@reduxjs/toolkit";

import themesReducer from "./reducers/themes";

const store = configureStore({
    reducer: {
        themes: themesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;