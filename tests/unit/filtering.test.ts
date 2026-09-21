import { describe, it, expect } from "vitest";
import data from "../../data.json";
import { filterJobs } from "@/utils/filterJobs";

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
    const expectedID = 3;

    // Act
    const result = filterJobs(data, filters);
    const actualID = result.map((job) => job.id);

    // Assert
    expect(result).toHaveLength(5);
    expect(actualID).toContain(expectedID);
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
