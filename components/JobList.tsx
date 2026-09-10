"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Tag from "./Tag";

interface JobListInterface {
  data: Array<{
    level: string;
    languages: Array<string>;
    tools: Array<string>;
    role: string;
  }>;
}

export default function JobList({ data }: JobListInterface) {
  // state tags from redux
  const tags = useSelector((state: RootState) => state.filters.selectedFilters);

  const filteredTags = data.filter((job) => {
    // languages array + level + tools array
    const tagsToCheck = [job.role, job.level, ...job.languages, ...job.tools];
    return tags.every((selectedTag) => tagsToCheck.includes(selectedTag));
  });

  return <>{console.log(filteredTags)}</>;
}
