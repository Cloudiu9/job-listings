import JobCard from "@/components/JobCard";
import { render, screen } from "@testing-library/react";
import data from "@/data.json";
import { Job } from "@/type/Job";
import StoreProvider from "@/redux/StoreProvider";

describe("JobCard", () => {
  it("renders the job logo", () => {
    // Arrange
    const mockJob: Job = data[0];

    // Act
    render(
      <StoreProvider>
        <JobCard job={mockJob} />
      </StoreProvider>,
    );

    // Assert
    expect(
      screen.getByRole("img", { name: mockJob.company }),
    ).toBeInTheDocument();
  });

  it("renders NEW badge when job.new is true", () => {
    // Arrange
    const mockJob: Job = { ...data[0], new: true };

    // Act
    render(
      <StoreProvider>
        <JobCard job={mockJob} />
      </StoreProvider>,
    );

    // Assert
    expect(screen.getByText(/new!/i)).toBeInTheDocument();
  });

  it("renders NEW badge when job.new is true", () => {
    // Arrange
    const mockJob: Job = { ...data[0], new: false };

    // Act
    render(
      <StoreProvider>
        <JobCard job={mockJob} />
      </StoreProvider>,
    );
    // screen.logTestingPlaygroundURL();

    // Assert
    expect(screen.queryByText(/new!/i)).not.toBeInTheDocument();
  });
});
