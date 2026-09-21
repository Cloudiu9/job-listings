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

  it("doesn't allow duplicates", () => {
    // Arrange
    const initialState = { selectedFilters: [] };

    // Act
    const state = reducer(initialState, addTag("React"));
    const state2 = reducer(state, addTag("React"));

    // Assert
    expect(state2.selectedFilters).toContain("React");
    expect(state2.selectedFilters.length).toBe(1);
  });

  it("removes a tag", () => {
    // Arrange
    const initialState = { selectedFilters: ["React", "JavaScript"] };

    // Act
    const state = reducer(initialState, removeTag("React"));

    // Assert
    expect(state.selectedFilters).toContain("JavaScript");
    expect(state.selectedFilters).not.toContain("React");
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
