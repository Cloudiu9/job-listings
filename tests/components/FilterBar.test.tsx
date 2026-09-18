import FilterBar from "@/components/FilterBar";
import { addTag } from "@/redux/features/filters/filtersSlice";
import { store } from "@/redux/store";
import StoreProvider from "@/redux/StoreProvider";
import { render, screen } from "@testing-library/react";

describe("FilterBar", () => {
  it("is not rendered", () => {
    render(
      <StoreProvider>
        <FilterBar />
      </StoreProvider>,
    );

    expect(
      screen.queryByRole("button", { name: /clear/i }),
    ).not.toBeInTheDocument();
  });

  it("renders the filterbar", () => {
    // Arrange
    // actually add a tag to the real store with dispatch
    store.dispatch(addTag("React"));

    // Act
    render(
      <StoreProvider>
        <FilterBar />
      </StoreProvider>,
    );

    // Assert
    expect(screen.getByRole("button", { name: /react/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /clear/i }),
    ).toBeInTheDocument();
  });
});
