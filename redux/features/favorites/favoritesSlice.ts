import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  selectedFavorites: number[];
}

const initialState: FavoritesState = {
  selectedFavorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    // can safely use .push() to mutate state (redux uses Immer)
    // Action to add a favorite job id to state array
    addFavorite: (state, action: PayloadAction<number>) => {
      if (!state.selectedFavorites.includes(action.payload))
        state.selectedFavorites.push(action.payload);
    },

    // Action to remove a favorite job id
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.selectedFavorites = state.selectedFavorites.filter(
        (id) => id !== action.payload,
      );
    },

    // Action to reset favorites
    resetFavorites: (state) => {
      state.selectedFavorites = [];
    },
  },
});

// export action for components to dispatch
export const { addFavorite, removeFavorite, resetFavorites } =
  favoritesSlice.actions;

// export reducer for store to use
export default favoritesSlice.reducer;
