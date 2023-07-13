import { configureStore } from "@reduxjs/toolkit";

import { IProduct } from "../types/IProduct";
import productsReducer from "./reducers/products";
import themesReducer from "./reducers/themes";
import {
    getLocalProductFavorite,
    setLocalProductFavorite,
    initProduct,
    setLocalProductFavoriteSingle,
    getLocalProductCart,
    setLocalProductCart,
  } from "../api/productsWorker";
  import { ICartState } from "../types/ICartState";

const backUp: IProduct[] = getLocalProductFavorite();
const cart: ICartState = getLocalProductCart();

const store = configureStore({
    reducer: {
        themes: themesReducer,
        products: productsReducer,
    }
})

store.subscribe(function () {
    setLocalProductFavorite(store.getState().products.backUp);
    setLocalProductFavoriteSingle(store.getState().products.single);
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;