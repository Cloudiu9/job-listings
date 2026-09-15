"use client";

import {
  addFavorite,
  removeFavorite,
} from "@/redux/features/favorites/favoritesSlice";
import { RootState } from "@/redux/store";
import { Job } from "@/type/Job";
import { AnimatePresence, motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";

interface JobPositionProps {
  job: Job;
}

export default function JobPosition({ job }: JobPositionProps) {
  const dispatch = useDispatch();

  const jobIds = useSelector(
    (state: RootState) => state.favorites.selectedFavorites,
  );

  const isFavorite = jobIds.includes(job.id);

  return (
    <button
      onClick={() => {
        dispatch(addFavorite(job.id));
        if (isFavorite) dispatch(removeFavorite(job.id));
      }}
      className="text-black font-bold text-lg text-start hover:cursor-pointer hover:text-main"
    >
      {job.position}
      <AnimatePresence>
        {isFavorite && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            💖
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
