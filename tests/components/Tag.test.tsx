import Tag from "@/components/Tag";
import StoreProvider from "@/redux/StoreProvider";
import { render, screen } from "@testing-library/react";

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
});
