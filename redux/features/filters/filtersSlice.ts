import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  selectedFilters: string[];
}

const initialState: FiltersState = {
  selectedFilters: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // can safely use .push() to mutate state (redux uses Immer)
    // Action to add a tag to state array
    addTag: (state, action: PayloadAction<string>) => {
      if (!state.selectedFilters.includes(action.payload))
        state.selectedFilters.push(action.payload);
    },

    // Action to remove a tag
    removeTag: (state, action: PayloadAction<string>) => {
      state.selectedFilters = state.selectedFilters.filter(
        (tag) => tag !== action.payload,
      );
    },

    // Action to reset tags
    resetFilters: (state) => {
      state.selectedFilters = [];
    },
  },
});

// export action for components to dispatch
export const { addTag, removeTag, resetFilters } = filtersSlice.actions;

// export reducer for store to use
export default filtersSlice.reducer;
