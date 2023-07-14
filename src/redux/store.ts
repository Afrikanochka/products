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
import credenitalsReducer from "./reducers/credential";
import usersReducer from "./reducers/users";
import cartReducer from "./reducers/cart";

const backUp: IProduct[] = getLocalProductFavorite();
const cart: ICartState = getLocalProductCart();

const store = configureStore({
    reducer: {
        themes: themesReducer,
        products: productsReducer,
        credential: credenitalsReducer,
        users: usersReducer,
        cart: cartReducer,
    },
    preloadedState: {
      cart,
      products: {
        backUp,
        present: [],
        single: initProduct(),
        categories: [],
        loading: false,
        error: false,
        page: 1,
        sortDir: { byCategories: "asc", byPrice: "asc" },
        filters: {
          search: "",
          categories: [],
          favorite: "off",
        },
      },
    },
})

store.subscribe(function () {
    setLocalProductFavorite(store.getState().products.backUp);
    setLocalProductFavoriteSingle(store.getState().products.single);
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;