"use client";

import { useDispatch, useSelector } from "react-redux";
import Tag from "./Tag";
import { Key } from "react";
import { RootState } from "@/redux/store";
import { resetFilters } from "@/redux/features/filters/filtersSlice";

export default function FilterBar() {
  const dispatch = useDispatch();
  const tags = useSelector((state: RootState) => state.filters.selectedFilters);

  return (
    <>
      <div
        className={`absolute items-center left-10 right-10 p-3 top-23.5 shadow-lg bg-white rounded-md flex gap-3 flex-wrap font-bold text-main transition-all ease-in-out duration-150 ${tags.length > 0 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {tags.map((tag: string, idx: Key) => (
          <Tag key={idx} tag={tag} close={true} />
        ))}

        <span
          onClick={() => dispatch(resetFilters())}
          className="ml-auto cursor-pointer hover:underline"
        >
          Clear
        </span>
      </div>
    </>
  );
}
