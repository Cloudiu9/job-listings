import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./features/filters/filtersSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer, // todos is key in global state obj
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
