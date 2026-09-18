import { filterJobs } from "../../components/JobList";
import { describe, it, expect } from "vitest";
import data from "../../data.json";

describe("filterJobs", () => {
  it("returns all jobs when no filters are selected", () => {
    // Arrange
    const result = filterJobs(data, []);

    // Assert
    expect(result).toHaveLength(data.length);
  });

  it("returns only jobs matching all selected filters", () => {
    // Arrange
    const filters = ["Junior", "JavaScript"];

    // Act
    const result = filterJobs(data, filters);

    // Assert
    expect(result).toHaveLength(5);
    expect(result[0].id).toBe(3);
  });

  it("returns no jobs", () => {
    // Arrange
    const filters = ["Junior", "JavaScript", "Senior"];

    // Act
    const result = filterJobs(data, filters);

    // Assert
    expect(result).toHaveLength(0);
  });
});
