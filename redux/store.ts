import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./features/filters/filtersSlice";
import favoritesReducer from "./features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer, // filters is key in global state obj
    favorites: favoritesReducer, // favorites is key in state obj
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
