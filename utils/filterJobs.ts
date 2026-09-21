import { Job } from "@/type/Job";

export function filterJobs(jobs: Job[], selectedFilters: string[]) {
  if (selectedFilters.length === 0) return jobs;

  return jobs.filter((job) => {
    // languages array + level + tools array
    const tagsToCheck = [job.role, job.level, ...job.languages, ...job.tools];

    return selectedFilters.every((selectedTag) =>
      tagsToCheck.includes(selectedTag),
    );
  });
}
