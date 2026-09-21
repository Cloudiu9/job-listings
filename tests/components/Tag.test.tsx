import Tag from "@/components/Tag";
import StoreProvider from "@/redux/StoreProvider";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { store } from "@/redux/store";

describe("Tag", () => {
  it("renders the tag text", () => {
    // Act
    render(
      <StoreProvider>
        <Tag tag="React" />
      </StoreProvider>,
    );

    // Assert
    expect(screen.getByRole("button", { name: /react/i })).toBeInTheDocument();
  });

  it("adds the tag to state", async () => {
    // Arrange
    const user = userEvent.setup();

    render(
      <StoreProvider>
        <Tag tag="React" />
      </StoreProvider>,
    );

    // Act
    const button = screen.getByRole("button", { name: /react/i });

    await user.click(button);

    // Assert
    expect(store.getState().filters.selectedFilters).toContain("React");
  });

  it("removes the tag from state", async () => {
    // Arrange
    const user = userEvent.setup();

    render(
      <StoreProvider>
        <Tag tag="React" close={true} />
      </StoreProvider>,
    );

    // screen.logTestingPlaygroundURL();

    // Act
    const button = screen.getByRole("img", { name: /remove/i });

    await user.click(button);

    // Assert
    expect(store.getState().filters.selectedFilters.length).toBe(0);
  });
});
