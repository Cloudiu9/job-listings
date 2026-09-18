import reducer, {
  addTag,
  removeTag,
  resetFilters,
} from "@/redux/features/filters/filtersSlice";

describe("filtersSlice", () => {
  it("adds a tag", () => {
    // Arrange
    const initialState = { selectedFilters: [] };

    // Act
    const state = reducer(initialState, addTag("React"));

    // Assert
    expect(state.selectedFilters).toContain("React");
  });
  it("removes a tag", () => {
    // Arrange
    const initialState = { selectedFilters: ["React", "JavaScript"] };

    // Act
    const state = reducer(initialState, removeTag("React"));

    // Assert
    expect(state.selectedFilters.length).toBe(1);
  });
  it("clears all tags", () => {
    // Arrange
    const initialState = { selectedFilters: ["React", "JavaScript"] };

    // Act
    const state = reducer(initialState, resetFilters());

    // Assert
    expect(state.selectedFilters.length).toBe(0);
  });
});
