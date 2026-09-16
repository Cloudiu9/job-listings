import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./features/filters/filtersSlice";
import favoritesReducer from "./features/favorites/favoritesSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "./storage";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// Combine reducers
const rootReducer = combineReducers({
  filters: filtersReducer,
  favorites: favoritesReducer,
});

// Persistence configuration
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore internal redux-persist actions to prevent console warnings
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
