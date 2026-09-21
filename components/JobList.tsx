"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import JobCard from "./JobCard";
import { Job } from "@/type/Job";
import { AnimatePresence } from "motion/react";
import { filterJobs } from "@/utils/filterJobs";

interface JobListProps {
  data: Job[];
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
