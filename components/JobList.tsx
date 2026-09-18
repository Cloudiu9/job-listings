"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import JobCard from "./JobCard";
import { Job } from "@/type/Job";
import { AnimatePresence } from "motion/react";

interface JobListProps {
  data: Job[];
}

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

export default function JobList({ data }: JobListProps) {
  // tags state from redux
  const tags = useSelector((state: RootState) => state.filters.selectedFilters);

  const filteredJobs = filterJobs(data, tags);

  return (
    <AnimatePresence>
      {filteredJobs.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
    </AnimatePresence>
  );
}
