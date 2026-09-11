"use client";

import { resetFavorites } from "@/redux/features/favorites/favoritesSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import data from "../../data.json";
import JobList from "@/components/JobList";
import FilterBar from "@/components/FilterBar";

export default function Profile() {
  const dispatch = useDispatch();

  const jobIds = useSelector(
    (state: RootState) => state.favorites.selectedFavorites,
  );

  // filter joblist by isFavorite
  // only show favorited jobs
  const favoriteJobs = data.filter((job) => {
    return jobIds.includes(job.id);
  });
  return (
    <>
      {favoriteJobs.length > 0 && <FilterBar />}
      <div className="flex relative">
        <div className="flex-1 p-4">
          <JobList data={favoriteJobs} />
        </div>

        <button
          onClick={() => dispatch(resetFavorites())}
          className="absolute top-4 right-4 md:static md:flex md:flex-col md:place-self-start md:ml-auto text-sm md:text-lg text-black cursor-pointer hover:underline"
        >
          <span className="inline md:block mr-1 md:mr-0">Clear</span>
          <span className="inline md:block">Favorites</span>
        </button>
      </div>
    </>
  );
}
